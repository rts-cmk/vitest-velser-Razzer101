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