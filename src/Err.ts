export class Err {
    readonly value: Error

    isOk = (): false => {
        return false
    }

    isErr = (): this is Err => {
        return true
    }

    constructor(v: Error) {
        this.value = v
    }

    Message(): string {
        return this.value.message
    }
}
