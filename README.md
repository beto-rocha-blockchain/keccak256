## keccak256

Este é um exemplo simples de como usar o algoritmo de hash **KECCAK-256** com **Node.js**.

## 🚀 Instalação

### 1. Clone ou baixe o repositório

Clone o repositório ou baixe os arquivos do projeto para sua máquina local:

```bash
git clone <link-do-repositório>
cd keccak256-example
```

### 2. Instale as dependências
Use o npm para instalar as dependências do projeto:

```bash
npm install
```

## 🧰 Uso

### 1. Via linha de comando local

Execute o comando abaixo para gerar o hash KECCAK-256 de uma string:

```bash
node cli.js "sua mensagem"
```

Exemplo:

```bash
node cli.js "hello"
# KECCAK-256("hello") = 1c8aff950685c2ed4bc3174f3471441c8c3c3f5d5a0868e01a6eb84ddc3e6b75
```

### 2. Instalar globalmente (opcional)

Se você preferir usar o comando de qualquer lugar, você pode instalar o pacote globalmente com o comando:

```bash
npm link
```

Agora você pode executar o comando keccak256 de qualquer diretório:

```bash
keccak256 "sua mensagem"
```

Exemplo:

```bash
keccak256 "hello"
# KECCAK-256("hello") = 1c8aff950685c2ed4bc3174f3471441c8c3c3f5d5a0868e01a6eb84ddc3e6b75
```

### 3. Exemplo de uso com texto longo
Você pode testar com mensagens mais longas:

```
keccak256 "Esta é uma mensagem longa para testar o KECCAK-256!"
# KECCAK-256("Esta é uma mensagem longa para testar o KECCAK-256!") = a6b6625b50b9c080213b0b14fbb8f3213fa48a8f6d477bd014f2fc42c84d123f
```

## 🔧 Scripts: Iniciar o projeto

Execute o comando para rodar o CLI:

```bash
npm start
```

## 📜 Contribuindo

Se você quiser contribuir para este projeto, sinta-se à vontade para enviar um pull request ou relatar problemas através da página de issues.

## Licença MIT