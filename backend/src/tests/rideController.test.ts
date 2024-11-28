import request from "supertest";

import app from "../server/app";

describe('POST /ride/estimate', () => {
    
    //Teste de sucesso para as 3 opções de motoristas
    it('Esperado status 200 e retornar as estimativas da viagem', async () => {
        const response = await request(app).post('/ride/estimate')
            .send({
                customer_id: 'teste',
                origin: 'Alexandria - RN',
                destination: 'Pau dos Ferros - RN',
            });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('origin');
        expect(response.body).toHaveProperty('destination');
        expect(response.body).toHaveProperty('distance');
        expect(response.body).toHaveProperty('duration');
        expect(response.body).toHaveProperty('options');
        expect(response.body.options.length).toBe(3);
        expect(response.body).toHaveProperty('routeResponse');
    });

    // Teste de mesmo endereço com escrita diferente
    it('Esperado status 400 e erro de destino e origem iguais', async () => {
        const response = await request(app).post('/ride/estimate')
            .send({
                customer_id: 'teste',
                origin: 'Offset, Alexandria - RN',
                destination: 'Escriorio Offset Alexandria Rio Grande do Norte',
            });

        expect(response.status).toBe(400);
        expect(response.body.error_code).toBe('INVALID_DATA');
    })
});