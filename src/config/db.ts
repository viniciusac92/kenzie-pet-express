import { Express } from 'express';
import { createConnection } from 'typeorm';

export const databaseConnect = (app: Express) => {
  console.log('Entrou na função de conectar o db');

  const PORT = 3000;
  console.log(PORT);

  createConnection()
    .then(_connection => {
      console.log('Entrou no _connection');
      app.listen(PORT, () => {
        console.log(`Funcionando em http://localhost:${PORT}`);
        console.log(`${__dirname}`);
        console.log(`Database conectado: ${_connection.options.database}`);
      });
    })
    .catch(error => {
      console.log(error);
      process.exit(1);
    });
};
