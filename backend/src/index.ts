import app from "./server/app";

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`API rodando na porta ${PORT}`);
});