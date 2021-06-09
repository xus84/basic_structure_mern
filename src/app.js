import express from 'express'
import cors from 'cors';
const app = express()

// settings 
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());


// routes
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))


export default app