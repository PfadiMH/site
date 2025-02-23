This Project has been abandoned, please view the [Puck Project](https://github.com/pfadimh/puck) for the up to date site.

# PfadiMH Website

## Getting Started

### Prerequisites

1. Install [Docker](https://www.docker.com/products/docker-desktop)
2. Install [VSCode](https://code.visualstudio.com/)
3. Install [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension

### Initial Setup

1. Open the project in VSCode.
2. Copy the `.env.example` to `.env`.
3. Click on the button in the bottom left corner and select "Reopen in Container".

## Development

### DevContainer

The devcontainer consists of the following services:

- Development Container itself
- PostgreSQL Database
- Directus CMS

## Setup

Before getting started, install the global dependencies:

```bash
bun install
```

### Directus Setup

Once the devcontainer is running, you can access the Directus CMS at [http://localhost:8055](http://localhost:8055).

On the first install, you will have to wait for Directus to finish setting up the database. Make sure you are able to access the login page before continuing.

To load the schema, run the following command in the terminal:

```bash
bun directus-apply
```

Login with the default credentials `admin@example.com` and `d1r3ctu5`.

To fix the "You don't have permission to access this." error, you can create a random collection and delete it afterwards.

### Frontend Setup

1. In Directus, create a new directus token under Users -> Admin User -> Token.
2. Copy the token and add it to the `.env` file as `DIRECTUS_TOKEN`.
3. Generate types for the schema (you might have to reload the window after):

   ```bash
   bun run prisma generate
   ```

4. To start the frontend, run the following command in the terminal:

   ```bash
   bun dev --turbo
   ```

The frontend is now accessible at [http://localhost:3000](http://localhost:3000).

## Schema Changes

1. Create a snapshot of the new schema:

   ```bash
   bun directus-snapshot
   ```

2. Generate types for the new schema (you might have to reload the window after):

   ```bash
   bun gen-types
   ```

   This will:

   - Introspect the database and generate the file `backend/schema.prisma`.
   - Fix the naming of the Prisma schema using `prisma-case-format`.
   - Generate types for the Prisma client. The generated types are saved in `node_modules/.prisma/client/index.d.ts`.

## Read More

- <https://wiki-pmh.battino.ch/>
