import { Err } from './Err'
import { Ok } from './Ok'

export type Result<T> = Ok<T> | Err

export function ok<T>(v: T): Ok<T> {
    return new Ok(v)
}

export function err(error: Error): Err {
    return new Err(error)
}
