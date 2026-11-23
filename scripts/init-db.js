
const mysql = require('mysql2/promise');

async function setupDatabase() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  await connection.execute(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100)
    )
  `);

  await connection.execute(
    `INSERT INTO users (id, name, email)
     VALUES (1, 'Adi', 'adi@gmail.com')
     ON DUPLICATE KEY UPDATE name = VALUES(name),
     email = VALUES(email)`
  );

  console.log('MySQL database initialized');

  await connection.end();
}

setupDatabase().catch(error => {
  console.error(error);
  process.exit(1);
});
