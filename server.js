import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import fighterRoutes from './routes/fighterRoutes.js';

const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/fighters', fighterRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
