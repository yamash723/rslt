import { OptionType } from './OptionType'

export class None {
    readonly type = OptionType.None

    isSome = (): false => {
        return false
    }

    isNone = (): this is None => {
        return true
    }
}
