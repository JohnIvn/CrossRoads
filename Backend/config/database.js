import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config();

const connectToDatabase = async () => {
    try{
        const db = new Sequelize(
            process.env.DB_NAME,    
            process.env.DB_USER,     
            process.env.DB_PASSWORD,
            {
              host: process.env.DB_HOST,  
              dialect: 'mysql',
              logging: false, 
            }
          );
          console.log(`successfully connected to the database!`);

    }catch(error){
        console.log(`error in connecting to the database, error: ${error}`);
    }
};

export default connectToDatabase;