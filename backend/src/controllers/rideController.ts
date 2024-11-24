import { Request, Response } from "express";

import RideService from "../services/rideService";

const rideService = new RideService();

class RideController {

    async estimateRide(req: Request, res: Response) {
        try {
            const { customer_id, origin, destination } = req.body;

            if ([customer_id, origin, destination].some((value) => typeof value !== 'string' || value.trim().length === 0)) {
                return res.status(400).json({
                    error_code: "INVALID_DATA",
                    error_description: "Os dados fornecidos no corpo da requisição são inválidos",
                });
            }

            if (origin === destination) {
                return res.status(400).json({
                    error_code: "INVALID_DATA",
                    error_description: "Os dados fornecidos no corpo da requisição são inválidos",
                });
            }

            const estimate = await rideService.estimateRide(customer_id, origin, destination);

            return res.status(200).json(estimate);
        } catch (error: any) {
            if (error.error_code && error.error_description) {
                return res.status(400).json(error);
            }

            console.error('Erro na execução: ', error);

            return res.status(500).json({
                error_code: "INTERNAL_SERVER_ERROR",
                error_description: "Erro ao calcular a estimação de rota",
            });
        }
    }

    async confirmRide(req: Request, res: Response) {
        try {
            const { customer_id, origin, destination, distance, duration, driver_id, driver_name, value } = req.body;

            if ([customer_id, origin, destination, duration, driver_name].some((value) => typeof value !== 'string' || value.trim().length === 0)) {
                return res.status(400).json({
                    error_code: "INVALID_DATA",
                    error_description: "Os dados fornecidos no corpo da requisição são inválidos",
                });
            }

            if ([driver_id, distance, value].some((value) => typeof value !== "number" || value < 0)) {
                return res.status(400).json({
                    error_code: "INVALID_DATA",
                    error_description: "Os dados fornecidos mo corpo da requisição são inválidos",
                });
            }

            const serviceResponse = await rideService.confirmRide(customer_id, origin, destination, distance, duration, driver_id, driver_name, value);

            return res.status(200).json(serviceResponse);

        } catch (error: any) {
            console.error('Erro na execução: ', error);

            return res.status(500).json({
                error_code: "INTERNAL_SERVER_ERROR",
                error_description: "Erro ao Confirmar viagem",
            });
        }
    }

    getRidesByCustomer = async (req: Request, res: Response) => {
        try {
            const { customer_id } = req.params;
            const driver_id = req.query.driver_id ? Number(req.query.driver_id) : undefined;

            if (!customer_id) {
                return res.status(400).json({
                    error_code: "INVALID_CUSTOMER",
                    error_description: "O ID do usuário não pode estar em branco.",
                });
            }

            if (driver_id !== undefined && (!Number.isInteger(driver_id) || driver_id < 0)) {
                return res.status(400).json({
                    error_code: "INVALID_DRIVER",
                    error_description: "Motorista invalido",
                });
            }

            const rides = await rideService.getRidesByCustomer(customer_id, driver_id);

            if (!rides || rides.length === 0) {
                return res.status(404).json({
                    error_code: "NO_RIDES_FOUND",
                    error_description: "Nenhum registro encontrado",
                });
            }

            return res.status(200).json({
                customer_id,
                rides,
            });

        } catch (error: any) {
            if (error.error_code) {
                return res.status(400).json(error);
            }

            console.error('Erro na execução: ', error);

            return res.status(500).json({
                error_code: "INTERNAL_SERVER_ERROR",
                error_description: "Erro ao processar a solicitação",
            });
        }
    }
}

export default RideController;