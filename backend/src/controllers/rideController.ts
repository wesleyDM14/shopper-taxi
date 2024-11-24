import { Request, Response } from "express";

import RideService from "../services/rideService";

const rideService = new RideService();

class RideController {

    async estimateRide(req: Request, res: Response) {
        try {
            const { customer_id, origin, destination } = req.body;

            if (!customer_id || !origin || !destination) {
                return res.status(400).json({
                    error_code: "INVALID_DATA",
                    error_description: "Os campos de ID de usuário, Origem e Destino são obrigatórios.",
                });
            }

            if (origin === destination) {
                return res.status(400).json({
                    error_code: "INVALID_DATA",
                    error_description: "Os endereços de Origem e Destino não podem ser iguais.",
                });
            }

            const estimate = await rideService.estimateRide(customer_id, origin, destination);

            return res.status(200).json(estimate);
        } catch (error: any) {
            console.error('Erro na execução: ', error);

            if(error.error_code && error.error_description) {
                return res.status(400).json(error);
            }

            return res.status(500).json({
                error_code: "INTERNAL_SERVER_ERROR",
                error_description: "Erro ao calcular a estimação de rota",
            });
        }
    }

    async confirmRide(req: Request, res: Response) {

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

            if (driver_id !== undefined && (isNaN(driver_id) || !Number.isInteger(driver_id))) {
                return res.status(400).json({
                    error_code: "INVALID_DRIVER",
                    error_description: "O ID do motorista fornecido é inválido.",
                });
            }

            const rides = await rideService.getRidesByCustomer(customer_id, driver_id);

            if (!rides || rides.length === 0) {
                return res.status(404).json({
                    error_code: "NO_RIDES_FOUND",
                    error_description: "Nenhuma viagem encontrada para este usuário.",
                });
            }

            return res.status(200).json({
                customer_id,
                rides,
            });

        } catch (error) {
            return res.status(500).json({
                error_code: "INTERNAL_SERVER_ERROR",
                error_description: "Erro ao processar a solicitação",
                details: error,
            });
        }
    }
}

export default RideController;