const express = require('express');
const cors = require('cors');

let app = express();

app.use(express.json())
app.use(cors());

// const usuarios = [];

app.get('/', (req, res) => {
    res.json("Renderizando texto")
})


app.listen(8000, () => {
    console.log('Aplicação rodando em http://localhost:8000')
} )