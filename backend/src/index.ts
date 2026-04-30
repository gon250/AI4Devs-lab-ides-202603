import dotenv from 'dotenv';
import express from 'express';
import { PrismaClient } from '@prisma/client';
import { NextFunction, Request, Response } from 'express';

dotenv.config();

const serverPort = 3010;
const dbClient = new PrismaClient();

export const app = express();
export default dbClient;

// Ruta raíz de verificación del servidor
app.get('/', (_req: Request, res: Response) => {
  res.send('Hola LTI!');
});

// Manejador centralizado de errores no controlados
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error((err as Error).stack);
  res.type('text/plain');
  res.status(500).send('Something broke!');
});

app.listen(serverPort, () => {
  console.log(`Server is running at http://localhost:${serverPort}`);
});
