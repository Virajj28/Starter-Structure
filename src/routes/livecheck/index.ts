import { Router } from "express";

class LiveCheckRoute {
    router: Router;
    constructor() {
        this.router = Router();

        this.router.get('/', (req, res, next) => {
            try {
                res.send({status:'Baseless service running'});
            }
            catch (err) {
                return next(err)
            }
        });
    }
}

export default LiveCheckRoute;