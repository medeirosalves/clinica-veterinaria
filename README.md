# 🐾 Sistema de Clínica Veterinária – Fullstack

Este é um sistema desenvolvido como trabalho escolar. Ele permite o **cadastro** e **listagem de animais** atendidos em uma clínica veterinária, utilizando tecnologias web modernas e banco de dados não relacional (MongoDB).

---

## 📚 Descrição

Sistema web completo com as seguintes funcionalidades:

- Cadastrar animais (nome, espécie, raça e tutor);
- Listar todos os animais cadastrados;
- Interface simples e intuitiva;
- Armazenamento no banco de dados MongoDB;
- API REST integrada entre o frontend e o backend.

---

## 🛠 Tecnologias Utilizadas

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js
- **Banco de Dados:** MongoDB (Atlas)
- **Comunicação:** API REST via JSON

---

## 📁 Estrutura do Projeto

```
clinica_veterinaria/
├── backend/
│   ├── server.js
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
```

---

## ⚙️ Instalação e Execução

### 🔧 Pré-requisitos

- Node.js instalado (https://nodejs.org)
- Conta gratuita no MongoDB Atlas (https://www.mongodb.com/cloud/atlas)
- Editor de código (ex: Visual Studio Code)

---

### 🗂️ Passo 1: Clonar o Projeto

```bash
git clone https://github.com/seu-usuario/clinica_veterinaria.git
cd clinica_veterinaria
```

---

### 🧩 Passo 2: Configurar o MongoDB Atlas

1. Crie uma conta em [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Crie um cluster gratuito
3. Vá em "Database" > "Browse Collections" e clique em "Add My Own Data"
4. Crie um banco chamado `clinica` e uma coleção chamada `animais`
5. Vá em "Database Access" e crie um usuário com senha
6. Vá em "Network Access" e permita acesso de qualquer IP (`0.0.0.0/0`)
7. Copie a string de conexão (exemplo):

```
mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/clinica?retryWrites=true&w=majority
```

8. No arquivo `backend/server.js`, substitua a conexão pelo seu link:

```js
mongoose.connect("SUA_STRING_AQUI")
```

---

### ⚙️ Passo 3: Iniciar o Servidor Backend

Abra o terminal na pasta `backend` e execute:

```bash
npm init -y
npm install express mongoose cors
node server.js
```

Se tudo estiver certo, você verá:

```
Servidor rodando na porta 3000
Conectado ao MongoDB
```

---

### 🌍 Passo 4: Iniciar o Frontend

Abra a pasta `frontend` e dê dois cliques no arquivo `index.html`, ou use o Live Server no VS Code.

---

## 🧪 Como Usar

1. Preencha os campos: nome do animal, espécie, raça e nome do tutor.
2. Clique em **Cadastrar** para salvar no banco.
3. Os animais cadastrados serão listados automaticamnete.

---

## 💄 Estilo da Interface

O layout foi construído com HTML e CSS, com foco em simplicidade e clareza para uso escolar.

---

## 📌 Observações

- O servidor Node.js (arquivo `server.js`) precisa estar rodando para que o frontend funcione corretamente.
- O MongoDB deve estar corretamente configurado e acessível.
- O sistema pode ser aberto localmente em dois cliques no `index.html`.

---

## 📸 Print do Funcionamento (opcional)

Se desejar, adicione um print de tela aqui para mostrar a aparência do projeto.

---

## 👨‍🏫 Trabalho Acadêmico

Este projeto foi desenvolvido como parte de um trabalho escolar, com o objetivo de demonstrar conhecimentos básicos em:

- Desenvolvimento web;
- Integração com banco de dados não relacional;
- Criação de APIs simples.

---

## 👨‍💻 Desenvolvido por

**Luan Medeiros**  
Aluno de Analise e Desenvolvimento de Sistemas  
Ano: 2025  
