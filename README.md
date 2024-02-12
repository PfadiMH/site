# PfadiMH Website

## Development

1. Install [Docker](https://www.docker.com/products/docker-desktop)
2. Install [VSCode](https://code.visualstudio.com/)
3. Install [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension
4. Open the project in VSCode
5. Click on the button in the bottom left corner and select "Reopen in Container"

## Docs

### DevContainer

The devcontainer consists of the following services:

- Development Container itself
- PostgreSQL Database
- Directus CMS

### Changes to the Schema

1. Create a snapshot of the new schema

   ```bash
   bun snapshot
   ```

2. Generate types for the new schema (you might have to reload the window after)

   ```bash
   bun gen-types
   ```

   This will

   - Introspect the database and generate the file `backend/schema.prisma`
   - Fix the naming of the Prisma schema using `prisma-case-format`
   - Generate types for the Prisma client. The generated types are saved in `node_modules/.prisma/client/index.d.ts`

### Next.js Frontend

To start the frontend, run the following commands in the terminal:

```bash
bun install
bun dev --turbo
```
