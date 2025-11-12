import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { inputTypes, testPromise, failTest, time } from "./Ovelser";

describe("inputType", ()=>{
    it("should recieve a string and return true", ()=>{
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

// describe("testPromise", () => {
    
//     it("fetches the api data", async() => {

//         const mockResponse = [
//                 {
//                 "userId": 1,
//                 "id": 1,
//                 "title": "first post title",
//                 "body": "first post body"
//                 }
//             ]

//         expect(testPromise(mockResponse)).toHaveBeenCalledTimes(1)
//     })
// })

describe("failTest", () => {
    // it("should recieve a wrong input at give a failed", () => {
    //     expect(failTest(2, 2)).toBe(1)
    // })
    it("should recieve a correct input at give a passed", () => {
        expect(failTest(2, 2)).toBe(4)
    })
})

describe("time", () => {
    beforeEach(()=>{
        vi.useFakeTimers()
    })
    afterEach(()=>{
        vi.useRealTimers()
    })

    it("should recive a current hour of the day and return true if between 9 - 17", () => {
        const date = new Date(2025, 11, 12, 15)
        vi.setSystemTime(date)
        expect(time()).toEqual(true)
    })

    it("should recive a current hour of the day and return false if not between 9 - 17", () => {
        const date = new Date(2025, 11, 12, 19)
        vi.setSystemTime(date)
        expect(time()).toEqual(false)
    })
})