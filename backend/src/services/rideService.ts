import { getGoogleApiRoute } from "../utils/getGoogleRoute";
import prismaClient from "../utils/prismaClientProvider";

class RideService {

    async estimateRide(customer_id: string, origin: string, destination: string) {
        const googleApiResponse = await getGoogleApiRoute(origin, destination);

        switch (googleApiResponse.status) {
            case 'OK':
                let route = googleApiResponse.routes[0];
                let routeStats = route.legs[0];

                let distance = routeStats.distance.value;
                let duration = routeStats.duration.text;

                let originLat = routeStats.start_location.lat;
                let originLng = routeStats.start_location.lng;

                let destinationLat = routeStats.end_location.lat;
                let destinationLng = routeStats.end_location.lng;

                const estimateDrivers = await prismaClient.driver.findMany({
                    where: {
                        km_min: {
                            lte: distance / 1000,
                        }
                    },
                    orderBy: {
                        taxa: "asc"
                    },
                    include: {
                        avaliations: {
                            select: {
                                rating: true,
                                comment: true,
                            }
                        }
                    }
                });

                const formatDriversResponse = estimateDrivers.map((driver) => ({
                    id: driver.id,
                    name: driver.nome,
                    description: driver.descricao,
                    vehicle: driver.carro,
                    review: {
                        rating: driver.avaliations[0].rating,
                        comment: driver.avaliations[0].comment
                    },
                    value: parseFloat((driver.taxa * (distance / 1000)).toFixed(2)),
                }));

                const response = {
                    origin: {
                        latitude: originLat,
                        longitude: originLng,
                    },
                    destination: {
                        latitude: destinationLat,
                        longitude: destinationLng,
                    },
                    distance: distance,
                    duration: duration,
                    options: formatDriversResponse,
                    routeResponse: googleApiResponse
                }

                return response;

            default:
                break;
        }
        return googleApiResponse;
    }

    async confirmRide() {

    }

    async getRidesByCustomer(customer_id: string, driver_id?: number) {
        return await prismaClient.ride.findMany({
            where: {
                customerId: customer_id,
                ...(driver_id !== undefined ? { driver_id: driver_id } : {}),
            },
            orderBy: {
                date: 'desc'
            },
            select: {
                id: true,
                date: true,
                origin: true,
                destination: true,
                distance: true,
                driver: {
                    select: {
                        id: true,
                        nome: true,
                    },
                },
            },
        });
    }
}

export default RideService;