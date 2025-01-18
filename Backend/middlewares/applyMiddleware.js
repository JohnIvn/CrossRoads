import connectToDatabase from "../config/database.js";

const applyMiddlewares = async (app, express) => {
    try{
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        await connectToDatabase();
    }catch(error){
        console.log(`error occured in applying middlewares, error: ${error}`);
    }
};

export default applyMiddlewares;