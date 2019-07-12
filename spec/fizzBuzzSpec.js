describe("FizzBuzz", function() {


    it("should be able to play a Song", function() {

        const value = 1;

        const result = fizzBuzz()

        //demonstrates use of custom matcher
        expect(result).toBePlaying(1);
    });



});