import mongoose from "mongoose";

export const Connection = async (username, password) => {
    const URL=`mongodb+srv://${username}:${password}@cluster0.atjsck0.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully')
    } catch (error) {
        console.log('Error while connecting with the database', error.message);
    }
}
export default Connection;