import { createConnection } from "typeorm";

export default createConnection({
 type: "postgres",
 url: process.env.DATABASE_URL!,
 synchronize: true,
 logging: false,
 entities: ["src/entities/**/*.ts"],
 migrations: ["src/migrations/**/*.ts"],
});
