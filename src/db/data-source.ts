import { DataSource } from "typeorm";
import "dotenv/config";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT as string),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["dist/src/db/entities/**/*.js"],
    migrations: ["dist/src/db/migrations/**/*.js"],
    extra: {
        trueServerCertificate: true,
    },
    // options: {
    //     cryptoCredentialsDetails: {
    //         miniVersion: "--",
    //     }
    // }
})