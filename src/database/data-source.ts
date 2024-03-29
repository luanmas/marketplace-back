import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "mkt_place",
    synchronize: true,
    logging: false,
    entities: ['src/entities/*.ts'],
    migrations: ['src/database/migrations/*.ts'],
})
