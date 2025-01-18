import express from 'express'
import dotenv from 'dotenv'
import applyMiddlewares from './middlewares/applyMiddleware.js';
import applyRoutes from './middlewares/applyRoutes.js';

const app = express();
dotenv.config();

applyMiddlewares(app, express);
applyRoutes();

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`app is listening on port: ${PORT}`);
});