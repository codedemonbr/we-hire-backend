import { Programmer } from './programmers.model';
import { Router } from '../common/router';
import * as restify from 'restify';

class ProgrammersRouter extends Router {
    applyRoutes(application: restify.Server) {
        application.get('/programmers', (req, res, next) => {
            Programmer.find().then((users) => {
                res.json(users);
                return next();
            });
        });

        application.get('/programmers/:id', (req, res, next) => {
            Programmer.findById(req.params.id).then((programmer) => {
                if (programmer) {
                    res.json(programmer);
                    return next();
                }
                res.send(404);
                return next();
            });
        });

        application.post('/programmers', (req, res, next) => {
            let programmer = new Programmer(req.body);
            programmer.save().then((programmer) => {
                res.json(programmer);
                return next();
            });
        });
    }
}

export const programmersRouter = new ProgrammersRouter();
