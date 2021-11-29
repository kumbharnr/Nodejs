const { expect, test, beforeEach, afterEach, beforeAll, afterAll } = require("@jest/globals")

var Matchers = require("./Matchers")

describe("Matchers suite",() =>
{
    test("compairing objects with toBe() and toEqual()",()=>{
        var empObj={"id":100,"name":"Navnath","dept":"cs","designation":"full stack"}
      expect(Matchers.returnObbject()).toEqual(empObj);
    })

    test("to use Matcher .not.notBeNull() with an object",()=>{
        var empObj=Matchers.returnObbject();

        console.log("returned data from the function is "+JSON.stringify(empObj));

        expect(empObj).not.toBeNull();
    })

    test("use the matchers toBeTruely() and toBeFalsy()",()=>{
        var bData=true;
        expect(bData).toBeTruthy();

        var empObj=Matchers.returnObbject();

        bData=false;
        expect(bData).toBeFalsy();

        empObj=null;
        expect(empObj).toBeFalsy();
    })

    test("to use matchers toContain() and checking the content of the array for a name",()=>{
        var strNameToSearchFor = 'Navnath';
        expect(Matchers.returnArrNames()).toContain(strNameToSearchFor);
    })

    beforeEach(()=>{
        console.log("IN BeforeEach()");
    })

    afterEach(()=>{
        console.log("In afterEach()");
    })

    beforeAll(()=>{
        console.log("In beforeAll()");
    })

    afterAll(()=>{
        console.log("In afterAll()");
    })

})