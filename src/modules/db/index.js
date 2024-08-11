import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: 'jyjtechsolutions.com',
  user: 'u481278819_biblio',
  password: 'Biblio141425*',
  database: 'u481278819_biblioteca'
});

export default pool;