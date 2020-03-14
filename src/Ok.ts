export class Ok<T> {
    readonly value: T

    isOk = (): this is Ok<T> => {
        return true
    }

    isErr = (): false => {
        return false
    }

    constructor(v: T) {
        this.value = v
    }
}
