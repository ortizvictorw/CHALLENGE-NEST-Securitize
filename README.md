# Securitize Back - API

This is the back-end API for the Securitize application, developed using NestJS. It's deployed on [Render](https://render.com/).

## Overview

This API is responsible for handling various functionalities for the Securitize application.

## Technologies Used

- NestJS
- TypeScript
- PostgreSQL (via TypeORM)
- JWT (JSON Web Tokens) for authentication
- Swagger UI for API documentation
- Other essential dependencies (listed in `package.json`)

## Getting Started

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run db docker - `docker compose up`
4. Run the application in development mode using `npm run start:dev`.


## Available Scripts

- `npm run build`: Builds the project.
- `npm run start`: Starts the server.
- `npm run start:dev`: Starts the server in development mode with watching enabled.
- `npm run lint`: Lints the codebase.
- `npm test`: Runs the unit tests.
- `npm run test:watch`: Runs tests in watch mode.
- `npm run test:cov`: Runs tests with coverage information.

## Environment Variables

Make sure to set up the necessary environment variables (such as database connection details, JWT secret, etc.) in the `.env` file.

## Database

This project uses PostgreSQL with TypeORM as the ORM. Ensure the database is properly configured and running.

## API Documentation

The API endpoints are documented using Swagger UI. Access the API documentation [here](https://main-0uz2.onrender.com/docs).

## Deployment

The API is deployed on [Render](https://render.com/).

## Contribution

Contributions to this project are welcome. Feel free to open issues or pull requests.

## License

This project is licensed under the UNLICENSED License - see the [LICENSE](LICENSE) file for details.

Thank you for using the Securitize Back API!
