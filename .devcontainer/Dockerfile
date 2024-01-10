FROM mcr.microsoft.com/devcontainers/typescript-node:0-18

RUN apt-get update \
    && apt-get -y install --no-install-recommends \
    git \
    nano \
    vim-tiny \
    curl \
    unzip \
    && apt-get auto-remove -y \
    && apt-get clean -y

USER node

RUN curl -fsSL https://bun.sh/install | bash
