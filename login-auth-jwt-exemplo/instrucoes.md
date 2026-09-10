## Passo a passo de criação do projeto

### Iniciar o projeto
```
npm init -y
```
### Instalar Framework Web
```
npm i express cors dotenv jsonwebtoken bcrypt
```
### Comando para iniciar o servidor
```
node server.js
```
### Comando para iniciar o servidor e realizar o refresh quando houver alteração no código
```
node --watch server.js
```
### Instalar Prisma ORM 
```
npm install prisma @prisma/client
```
### Instalar Prisma ORM = Postgres
```
npm install pg @prisma/adapter-pg
```
### Instruções do Prisma ORM
```
DATABASE_URL="postgresql://postgres:senha@localhost:5432/meu_banco"

JWT_SECRET="uma-chave-super-secreta-e-grande"
PORT=3333
```
### Criar .gitignore
```
node_modules/
.env
```
### No Prisma 8, a configuração mudou em relação às versões antigas. A CLI utiliza prisma.config.ts
```
import "dotenv/config";
import { definePrismaConfig } from "prisma/config";
import { defineConfig as ormConfig } from "@prisma/orm-postgres/config";

export default definePrismaConfig({
  orm: ormConfig({
    contract: "./prisma/contract.prisma",

    db: {
      connection: process.env.DATABASE_URL!
    }
  })
});
```
### backend/prisma/contract.prisma
```
model User {
  id        String   @id @default(uuid())
  name      String
  email     String   @unique
  password  String
  active    Boolean  @default(true)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```
### Inicializar o Prisma ORM
```
npx prisma orm init --yes --target postgres --authoring psl --confirm financas-app-backend
npx prisma contract emit
npx prisma db init
```
### Conexao com o Prisma ORM src/prisma/db.js
```
import "dotenv/config";

import { PrismaClient } from "../../generated/prisma/index.js";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
});

const prisma = new PrismaClient({
  adapter
});

export default prisma;
```
> O caminho exato do generated/prisma pode variar conforme a configuração que o Prisma 8 emitir no seu projeto. A ideia importante é usar o cliente gerado pelo Prisma 8 junto com PrismaPg.

###
```

```
###
```

```
###
```

```
###
```

```
###
```

```
###
```

```
