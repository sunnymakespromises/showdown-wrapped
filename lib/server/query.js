import { execute } from './db'

async function query(query, values) {
    try {
        return await execute({ query: query, values: values })
    }
    catch( error ) {
        return {error: error.message}
    }
}

export { query }