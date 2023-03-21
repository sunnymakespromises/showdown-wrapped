import { sha256 } from 'js-sha256'

function hash(text) {
    return sha256(text)
}

function compareHash(text, hashed) {
    return (sha256(text) === sha256(hashed))
}

export { hash, compareHash }