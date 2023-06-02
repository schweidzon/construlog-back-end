import express, { json } from 'express';
import cors from 'cors';
import routes from './routes/indexRoutes'
import handleErrors from './middlewares/handleErrors'
const app = express();

app.use(json());
app.use(cors());
app.use(routes)
app.use(handleErrors)


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`))