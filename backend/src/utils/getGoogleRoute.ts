import axios from "axios";

export const getGoogleApiRoute = async (origin: string, destination: string) => {
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
        throw new Error('A chave da API do Google não foi encontrada.');
    }

    const headers = {
        "Content-Type": "application/json",
    };

    const apiResponse = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?destination=${destination}&origin=${origin}&key=${apiKey}`, { headers });

    return apiResponse.data;
}