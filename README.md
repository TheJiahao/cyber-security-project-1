# Cyber security base project 1

A simple vulnerable web app with login/logout and user profile pages.

## Installation

- Install Node LTS v20.17.0 or newer (probably works) with a package manager (Homebrew (Mac), apt (Linux/Ubuntu), scoop (Windows), etc.) or download and use the installer from https://nodejs.org
  For apt in Ubuntu, run:

    ```console
    sudo apt install nodejs
    ```

- Install pnpm with corepack or any method listed in https://pnpm.io/installation
  With corepack (shipped with Node) run:

    ```console
    sudo corepack corepack enable
    ```

- Install dependencies:

    ```console
    pnpm install
    ```

- Clone the repository:

    ```console
    git clone git@github.com:TheJiahao/cyber-security-project-1.git
    ```

## Running the application

- Initialize database:

    ```console
    pnpm run init:db
    ```

- Run the server:

    ```console
    pnpm run dev
    ```
