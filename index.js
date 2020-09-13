import app from './app.js';
const PORT = 3000;


async function main() {
    await app.listen(PORT);
    console.log(`Server is Running on port: http://localhost:${PORT}`)

}

main();