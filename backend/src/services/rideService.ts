import { error } from "console";
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

                if (originLat === destinationLat && originLng === destinationLng) {
                    throw {
                        error_code: "INVALID_DATA",
                        error_description: "Os dados fornecidos no corpo da requisição são inválidos",
                    }
                }

                const estimateDrivers = await prismaClient.driver.findMany({
                    where: {
                        km_min: {
                            lte: distance / 1000,
                        },
                    },
                    orderBy: {
                        taxa: "asc",
                    },
                    include: {
                        avaliations: {
                            select: {
                                rating: true,
                                comment: true,
                            },
                        },
                    },
                });

                const formatDriversResponse = estimateDrivers.map((driver) => ({
                    id: driver.id,
                    name: driver.nome,
                    description: driver.descricao,
                    vehicle: driver.carro,
                    review: {
                        rating: driver.avaliations[0].rating,
                        comment: driver.avaliations[0].comment,
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
                    routeResponse: googleApiResponse,
                };

                return response;

            case "NOT_FOUND":
                throw {
                    error_code: "NOT_FOUND",
                    error_description: "Um, os dois locais, de origem e destino, não foi encontrado pela API.",
                };
            case "ZERO_RESULTS":
                throw {
                    error_code: "ZERO_RESULTS",
                    error_description: "Nenhuma rota encontrada entre a origem e destino informado.",
                };
            case "MAX_WAYPOINTS_EXCEEDED":
                throw {
                    error_code: "MAX_WAYPOINTS_EXCEEDED",
                    error_description: "A rota solicitada é muito longa para ser processada.",
                };
            case "INVALID_REQUEST":
                throw {
                    error_code: "INVALID_REQUEST",
                    error_description: "Solicitação inválida. Verifique os parâmetros da url da requisição.",
                };
            case "OVER_DAILY_LIMIT":
                throw {
                    error_code: "OVER_DAILY_LIMIT",
                    error_description: "A chave da api esta inválida ou a conta do Google Cloud excedeu o limite diário de uso",
                };
            case "OVER_QUERY_LIMIT":
                throw {
                    error_code: "OVER_QUERY_LIMIT",
                    error_description: "O limite de requisições diárias da API foi excedido.",
                };
            case "REQUEST_DENIED":
                throw {
                    error_code: "REQUEST_DENIED",
                    error_description: "Uso da api foi negado. Verifique as configurações da chave API no google cloud.",
                };
            case "UNKNOWN_ERROR":
                throw {
                    error_code: "UNKNOWN_ERROR",
                    error_description: "A solicitação falhou devido à um erro interno do servidor google.",
                };
            default:
                throw {
                    error_code: "UNHANDLED_STATUS",
                    error_description: `Um status inesperado foi retornado pela API: ${googleApiResponse.status}`,
                };
        };
    }

    async confirmRide(customer_id: string, origin: string, destination: string, distance: number, duration: string, driver_id: number, driver_name: string, value: number) {

        const driver = await prismaClient.driver.findFirst({
            where: {
                AND: [
                    { id: driver_id },
                    { nome: driver_name },
                ],
            }
        });

        if (!driver) {
            throw {
                error_status: 404,
                error_code: "DRIVER_NOT_FOUND",
                error_description: "Motorista não encontrado",
            }
        }

        if (distance < driver.km_min) {
            throw {
                error_status: 406,
                error_code: "INVALID_DISTANCE",
                error_description: "Quilometragem inválida para o motorista"
            }
        }

        const newRide = await prismaClient.ride.create({
            data: {
                customerId: customer_id,
                origin: origin,
                destination: destination,
                distance: distance,
                duration: duration,
                driverId: driver.id,
                value: value,
            },
        });

        return { sucess: true };
    }

    async getRidesByCustomer(customer_id: string, driver_id?: number) {

        if (driver_id !== undefined) {
            const driverExist = await prismaClient.driver.findUnique({
                where: { id: driver_id },
            });

            if (!driverExist) {
                throw {
                    error_code: "INVALID_DRIVER",
                    error_description: "Motorista invalido"
                }
            }
        }

        return await prismaClient.ride.findMany({
            where: {
                customerId: customer_id,
                ...(driver_id !== undefined ? { driverId: driver_id } : {}),
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
                value: true,
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