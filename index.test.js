import {capitalize,reverseString,calculator,caesarCipher,analyzeArray} from "./index.js";

test("Capitalize 'dog'", () => {
    expect(capitalize("dog")).toBe("Dog");
});

test("Capitalize 'nugget'",()=>{
    expect(capitalize("nugget")).toBe("Nugget");
});

test("Reverse 'chicken'",()=>{
    expect(reverseString("chicken")).toBe("nekcihc");
});

test("Reverse 'balloon'",()=>{
    expect(reverseString("balloon")).toBe("noollab");
});

test("Add 1 and 2 to get 3",()=>{
    expect(calculator.add(1,2)).toBe(3);
});

test("Subtract 1 and B to get Error",()=>{
    expect(() => calculator.subtract(1,"B")).toThrow("Calculator must take in numbers");
});

test("Convert abcde to bcdef",()=>{
    expect(caesarCipher("abcde")).toBe("bcdef");
});

test("Convert BanAna to CboBob",()=>{
    expect(caesarCipher("BanAna")).toBe("CboBob");
});

test("Analyze [1,2,3]",()=>{
    expect(analyzeArray([1,2,3])).toEqual({
        average:2,
        min:1,
        max:3,
        length:3
    });
});