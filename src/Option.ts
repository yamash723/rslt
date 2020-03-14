import { None } from './None'
import { Some } from './Some'

export type Option<T> = Some<T> | None

export const none = new None()

export function some<T>(v: T): Some<T> {
    return new Some(v)
}
