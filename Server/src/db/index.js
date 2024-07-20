import prisma from "prisma";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
        const connectionInstance = await prisma.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
        console.log(`\n MySQL connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MySQL connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB