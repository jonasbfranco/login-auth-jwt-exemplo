## Passo a passo de criação do projeto

### Site gerar chave criptografada
```
https://acte.ltd/utils/randomkeygen
```
### Iniciar o projeto
```
npm init -y
```
### Instalar Framework Web
```
npm i express cors dotenv jsonwebtoken bcrypt pg
```
### Comando para iniciar o servidor
```
node server.js
```
### Comando para iniciar o servidor e realizar o refresh quando houver alteração no código
```
node --watch server.js
```
### Alterar script no package.json
```
"dev": "node --watch src/server.js",
```
### Executar no terminal
```
npm run dev
```


