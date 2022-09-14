import express, { NextFunction, Request, Response, Router } from "express";
import bodyParser from 'express'
import http from 'http';
import cors from 'cors';
// import { setUpRoutes } from "../routes";
import LiveCheckRoute from "../routes/livecheck";
import schedule from "node-schedule"
import cron from 'cron';

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

    // Use node schedule package for ist time
    // const schedule = require('node-schedule');

    // const rule = new schedule.RecurrenceRule();
    // rule.minute = 0;
    // rule.second = 3;

    // const job = schedule.scheduleJob(rule, function(){
    // console.log('The answer to life, the universe, and everything!');
    // });

    // job.cancel();

    cron.schedule('0 1 * * *', () => {
        console.log('Running a job at 01:00 at America/Sao_Paulo timezone');
      }, {
        scheduled: true,
        timezone: "America/Sao_Paulo"
      });

    // setUpRoutes(app);

    app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
        return res.status(500).json({message: err.message});
    })

    server.listen(PORT, () => {
        console.log(`Server runnig on http://localhost:${PORT}`);
    })
}

export default startServer;