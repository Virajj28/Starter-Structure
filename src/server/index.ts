import express, { NextFunction, Request, Response, Router } from "express";
import bodyParser from 'express'
import http from 'http';
import cors from 'cors';
// import { setUpRoutes } from "../routes";
import LiveCheckRoute from "../routes/livecheck";

const PORT = parseInt(process.env.PORT || '3000', 10);

const startServer = () => {
    const app =  Router ();

    const expressApp = express();

    expressApp.use("/livecheck", new LiveCheckRoute().router);

    expressApp.use('/api/v1/', app);

    const server = http.createServer(expressApp);

    app.use(bodyParser.json());

    app.use(cors({
        origin: "*",
        credentials: true,
    }))

    // setUpRoutes(app);

    app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
        return res.status(500).json({message: err.message});
    })

    server.listen(PORT, () => {
        console.log(`Server runnig on http://localhost:${PORT}`);
    })
}

export default startServer;