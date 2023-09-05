export function capitalize (string) {
    if (string.length > 0) {
        return string.slice(0,1).toUpperCase()+string.slice(1);
    } else {
        throw new Error("Can't capitalize empty string!");
    }
}

export function reverseString (string) {
    if (string.length > 0) {
        let temp = string.split("");
        let result = "";
        while (temp.length > 0) {
            result += temp.pop();
        }
        return result;
    } else {
        return "";
    }
}

export const calculator = {
    add (x,y) {
        if (this._typeChecker(x,y)) {
            return x+y;
        } else {
            throw Error("Calculator must take in numbers");
        }
    },
    subtract(x,y) {
        if (this._typeChecker(x,y)) {
            return x-y;
        } else {
            throw Error("Calculator must take in numbers");
        }
    },
    multiply(x,y) {
        if (this._typeChecker(x,y)) {
            return x*y;
        } else {
            throw Error("Calculator must take in numbers");
        }
    },
    divide(x,y) {
        if (this._typeChecker(x,y)) {
            return x/y;
        } else {
            throw Error("Calculator must take in numbers");
        }
    },
    _typeChecker(...args) {
        for (let arg of args) {
            if (typeof arg !== "number") {
                return false;
            }
        }
        return true;
    }
}

export function caesarCipher (string) {
    return string.split("").map(x => String.fromCharCode((x.charCodeAt(0)-64-(32*Math.floor(x.charCodeAt(0)/91)))%26+65+(32*Math.floor(x.charCodeAt(0)/91)))).join("");
}

export function analyzeArray (arr) {
    return {
        average : (()=>{
            let result = 0;
            for (let element of arr) {
                result += element;
            }
            return result/arr.length;
        })(),
        min : (() => {
            const temp = [...arr];
            temp.sort((a,b)=>a-b);
            return temp[0];
        })(),
        max : (()=>{
            const temp = [...arr];
            temp.sort((a,b)=>b-a);
            return temp[0];
        })(),
        length: arr.length
    }
}