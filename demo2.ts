// 使用命名空间的验证器

namespace Validator {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

}

// 测试

let strings = ['Hello', '89772', '1230'];

let validators: { [s: string]: Validator.StringValidator; } = {};

validators['ZIP code'] = new Validator.ZipCodeValidator();
validators['Letters Only'] = new Validator.LettersOnlyValidator();

for (let s of string) {
    for (let name in validators) {
        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
    }
}







