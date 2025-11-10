import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { inputTypes } from "./Ovelser";

describe("inputType", ()=>{
    it("should recive a string and return true", ()=>{
        expect(inputTypes("")).toBe(true)
    })
    it("should recive a number and return true", ()=>{
        expect(inputTypes(1)).toBe(true)
    })
    it("should recive null and return true", ()=>{
        expect(inputTypes(null)).toBe(true)
    })
    it("should recive a array and return false", ()=>{
        expect(inputTypes([])).toBe(false)
    })
})

function executeEverySec(func) {
  setTimeout(func, 1000)
}

const mock = vi.fn(() => console.log('executed'))

describe("grupperede tests", ()=>{
    beforeEach(() => {
        vi.useFakeTimers()
    })
    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('should execute after a second', () => {
        executeEverySec(mock)
        expect(mock).not.toHaveBeenCalled()
        vi.advanceTimersToNextTimer()
        expect(mock).toHaveBeenCalledTimes(1)
    })
})

