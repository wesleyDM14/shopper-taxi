import prismaClient from "../utils/prismaClientProvider";

class RideService {

    async estimateRide(customer_id: string, origin: string, destination: string) {

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