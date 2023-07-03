import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async() => {

    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-cz3acgj-shard-00-00.jxgztjb.mongodb.net:27017,ac-cz3acgj-shard-00-01.jxgztjb.mongodb.net:27017,ac-cz3acgj-shard-00-02.jxgztjb.mongodb.net:27017/?ssl=true&replicaSet=atlas-10hzge-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology:true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);

    }
}

export default Connection;