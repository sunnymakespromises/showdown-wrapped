import mysql from 'mysql2/promise'

async function execute({ query, values = [] }) {
    const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        socketPath: process.env.MYSQL_SOCKET_PATH
    })
    try {
        const [results] = await connection.execute(query, values)
        connection.end()
        return results
    } catch (error) {
        throw Error(error.message)
    }
}

export { execute }