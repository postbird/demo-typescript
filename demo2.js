// 使用命名空间的验证器
var Validator;
(function (Validator) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var LettersOnlyValidator = /** @class */ (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validator.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = /** @class */ (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validator.ZipCodeValidator = ZipCodeValidator;
})(Validator || (Validator = {}));
// 测试
var strings = ['Hello', '89772', '1230'];
var validators = {};
validators['ZIP code'] = new Validator.ZipCodeValidator();
validators['Letters Only'] = new Validator.LettersOnlyValidator();
for (var _i = 0, string_1 = string; _i < string_1.length; _i++) {
    var s = string_1[_i];
    for (var name_1 in validators) {
        console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
}
