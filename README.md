# PfadiMH Website

## Development

### Setup

1. Install [Docker](https://www.docker.com/products/docker-desktop)
2. Install [VSCode](https://code.visualstudio.com/)
3. Install [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension
4. Open the project in VSCode
5. Click on the button in the bottom left corner and select "Reopen in Container"

### Docs

#### Directus CMS

The Directus CMS starts automatically with the devcontainer.

When the schema is changed, you need to generate the typescript types for the frontend. To do this, open the "Generate Types" Module in the Directus Admin Panel and download the generated types. Then, copy the types to the `./lib/directus-types.d.ts` file. After that, edit the types to use the Directus User type instead of the generated one.

#### Next.js Frontend

To start the frontend, run the following commands in the terminal:

```bash
bun install
bun dev --turbo
```
