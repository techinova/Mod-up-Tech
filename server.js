const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configura o Express para servir arquivos estáticos das pastas corretas
app.use(express.static(path.join(__dirname, 'html')));  // Serve arquivos HTML
app.use(express.static(path.join(__dirname, 'style'))); // Serve arquivos CSS
app.use(express.static(path.join(__dirname, 'script'))); // Serve arquivos JS
app.use(express.static(path.join(__dirname, 'src')));    // Serve arquivos de imagem

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Roteamento para as páginas HTML
app.get('/projeto', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'projeto.html'));
});

app.get('/projetos', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'projetos.html'));
});

app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, 'html', 'sobre.html'));
});

// Inicia o servidor e exibe o link no terminal
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
  console.log(`Acesse o site através do link: http://localhost:${port}`);
});
