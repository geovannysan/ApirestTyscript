import express from 'express'; 
import swaggerApp from './swagger'
import usersRouter from './routes/user';

const app = express()

app.use(express.json());

// Usa las rutas
app.use('/api', usersRouter);

// Usa Swagger en la ruta /api-docs
app.use('/', swaggerApp);

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
 