import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoute from './routes/posts.js';



const app = express();

app.use(bodyParser.json({ limit: '50mb' , extended: true}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

//Connect to MongoDB
const URL_CONNECT = 'mongodb+srv://mongouser:0213@cluster0.pffqa.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(URL_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true}).then(app.listen(PORT,() => {console.log(`Server on ${PORT}`)})).catch(err =>
    console.log(err) );


//Routes
app.use('/posts', postRoute);
