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

    function fizzBuzz(value) {
        return value;
    }

});