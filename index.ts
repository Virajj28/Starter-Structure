// import { AppDataSource } from "./src/db/data-source";
import startServer from "./src/server";

startServer();

// AppDataSource.initialize()
//  .then((dataSource) => {
//     console.log("Data source initialized");
//     const service = new RegisterServices(dataSource);
//     startServer(service)
//  })
//  .catch((err) => {
//     console.log("Error initializing data source");
//  })
