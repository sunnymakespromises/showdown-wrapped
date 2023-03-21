async function post({body, path}) {
    const config = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }
    const response = await fetch('/api' + path, config)
    const res = await response.json()
    return res.response
}

export { post }