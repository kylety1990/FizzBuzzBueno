describe("FizzBuzz", function() {


    it("gives number one in the method", function() {

        const value = 1;

        const result = fizzBuzz(value)

        expect(result).toEqual(1);
    });

    it("gives number two in the method", function() {

        const value = 2;

        const result = fizzBuzz(value)

        expect(result).toEqual(2);
    });

    it("gives number 3 and should return Fizz", function() {

        const value = 3;

        const result = fizzBuzz(value)

        expect(result).toEqual('Fizz');
    });

    it("gives number 5 and should return Buzz", function() {

        const value = 5;

        const result = fizzBuzz(value)

        expect(result).toEqual('Buzz');
    });

    it("gives fizz when the value multiples 3", function() {

        const value = 6;

        const result = fizzBuzz(value)

        expect(result).toEqual('Fizz');
    });

    it("gives fizz when the value multiples 3", function() {

        const value = 10;

        const result = fizzBuzz(value)

        expect(result).toEqual('Buzz');
    });

    function fizzBuzz(value) {

        if (value % 3 === 0) {
            return 'Fizz';

        } else if (value % 5 === 0) {
            return 'Buzz';

        } else {
            return value;

        }
    }

});