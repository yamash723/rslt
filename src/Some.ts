import { OptionType } from './OptionType'

export class Some<T> {
    readonly type = OptionType.None
    readonly value: T

    isSome = (): this is Some<T> => {
        return true
    }

    isNone = (): false => {
        return false
    }

    constructor(v: T) {
        this.value = v
    }
}
