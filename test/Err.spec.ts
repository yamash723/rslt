import { Err } from '../src'

describe('Err', () => {
    let error: Err
    const testValue = new Error('errorMessage')

    beforeEach(() => {
        error = new Err(testValue)
    })

    it('isOk should return false', () => {
        expect(error.isOk()).toBeFalsy()
    })

    it('isErr should return false', () => {
        expect(error.isErr()).toBeTruthy()
    })

    it('err() should return value', () => {
        if (error.isOk()) {
            throw new Error('test failed')
        }
        expect(error.value).toStrictEqual(testValue)
    })

    it('Message() should return error message', () => {
        if (error.isOk()) {
            throw new Error('test failed')
        }
        expect(error.Message()).toEqual(testValue.message)
    })
})
