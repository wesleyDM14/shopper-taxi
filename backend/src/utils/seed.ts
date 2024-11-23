import prismaClient from "./prismaClientProvider";

async function seed() {

    const drivers = [
        { id: 1, nome: 'Homer Simpson', descricao: 'Olá! Sou o Homer, seu motorista camarada! Relaxe e aproveite o passeio, com direito a rosquinhas e boas risadas (e talvez alguns desvios).', carro: 'Plymouth Valiant 1973 rosa e enferrujado', avaliacao: '2/5\nMotorista simpático, mas errou o caminho 3 vezes. O carro cheira a donuts.', taxa: 2.5, km_min: 1 },
        { id: 2, nome: 'Dominic Toretto', descricao: 'Ei, aqui é o Dom. Pode entrar, vou te levar com segurança e rapidez ao seu destino. Só não mexa no rádio, a playlist é sagrada.', carro: 'Dodge Charger R/T 1970 modificado', avaliacao: '4/5\nQue Viagem incrível! O carro é um show a parte e o motorista, apesar de ter cara de poucos amigos, foi super gente boa. Recomendo!', taxa: 5, km_min: 5 },
        { id: 3, nome: 'James Bond', descricao: 'Boa noite, sou James Bond. À seu dispor para um passeio suave e discreto. Aperte o cinto e aproveite a viagem.', carro: 'Aston Martin DB5 clássico', avaliacao: '5/5\nServiço impecável! O motorista é a propria definição de classe e o carro é simplesmente magnífico. Uma experiência digna de um agente secreto.', taxa: 10, km_min: 10 },
    ];

    for (const driver of drivers) {
        const createdDriver = await prismaClient.driver.upsert({
            where: { id: driver.id },
            update: {},
            create: {
                id: driver.id,
                nome: driver.nome,
                descricao: driver.descricao,
                carro: driver.carro,
                taxa: driver.taxa,
                km_min: driver.km_min,
            },
        });

        const [rating, comment] = driver.avaliacao.split('\n');

        await prismaClient.avaliation.create({
            data: {
                rating: parseInt(rating.split('/')[0].trim()),
                comment: comment,
                driverId: createdDriver.id,
            },
        });
    }

    console.log('Banco de dados populado com sucesso!');
}

seed()
    .catch((error) => {
        console.error('Erro ao popular o banco de dados: ', error);
        process.exit(1);
    })
    .finally(async () => {
        await prismaClient.$disconnect();
    });