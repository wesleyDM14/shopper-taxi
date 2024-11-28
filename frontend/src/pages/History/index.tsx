import React, { useState } from "react";
import axios from "axios";
import { Container, FilterGroup, InputGroup, NoData, Table, Title } from "./history.styles";

interface Driver {
    id: number,
    nome: string,
}

interface Ride {
    id: string;
    date: string;
    driver: Driver;
    origin: string;
    destination: string;
    distance: number;
    duration: string;
    value: string;
}

const History: React.FC = () => {
    const [customerId, setCustomerId] = useState<string>("");
    const [rides, setRides] = useState<Ride[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [selectedDriver, setSelectedDriver] = useState<string>("all");

    const fetchRides = async () => {
        if (!customerId) {
            alert("Por favor, informe um ID.");
            return;
        }

        setLoading(true);

        try {
            const params = selectedDriver === "all" ? {} : { driver_id: selectedDriver };
            const apiUrl = process.env.REACT_APP_API_URL;
            const response = await axios.get(`${apiUrl}/ride/${customerId}`, { params });
            const allRides: Ride[] = response.data.rides;

            setRides(allRides);
        } catch (error: any) {
            alert(`Erro ao recuperar Historico: ${error.response.data.error_description}`);
            setRides([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <Title>Historico de Viagens</Title>
            <InputGroup>
                <input
                    type="text"
                    placeholder="Digite o ID de usuário"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                />
                <button onClick={fetchRides} disabled={loading}>
                    {loading ? "Loading..." : "Pesquisar"}
                </button>
            </InputGroup>
            <FilterGroup>
                <select
                    value={selectedDriver}
                    onChange={(e) => setSelectedDriver(e.target.value)}
                >
                    <option value="all">Todos os Motoristas</option>
                    <option value="1">Homer Simpson</option>
                    <option value="2">Dominic Toretto</option>
                    <option value="3">James Bond</option>
                </select>
            </FilterGroup>
            <Table>
                <thead>
                    <tr>
                        <th>Data & Hora</th>
                        <th>Motorista</th>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Distância</th>
                        <th>Duração</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {rides.length === 0 ? (
                        <NoData>
                            <td colSpan={7}>Nenhuma Viagem encontrada.</td>
                        </NoData>
                    ) : (
                        rides.map((ride) => (
                            <tr key={ride.id}>
                                <td>{new Date(ride.date).toLocaleDateString() + ' - ' + new Date(ride.date).toLocaleTimeString()}</td>
                                <td>{ride.driver.nome}</td>
                                <td>{ride.origin}</td>
                                <td>{ride.destination}</td>
                                <td>{ride.distance > 1000 ? (ride.distance / 1000).toFixed(1) : ride.distance} {ride.distance ? 'KM' : 'M'}</td>
                                <td>{ride.duration}</td>
                                <td>R$ {ride.value}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default History;