describe("matchers test", function(){
    test("toBe and toEqual are different", function () {
      let nums = [1,2,3];
      let newNums = nums.slice();

  
      expect(nums).not.toBe(newNums);  // not the same reference!
      expect(nums).toEqual(newNums);   // same values so we use toEqual
    });

    test('compare toBe and toEqual Copy', function () {
        let nums = [1,2,3];
        let copy = [...nums];
        let nums2 = nums;

        expect(copy).toEqual(nums)  // value based
        //expect(copy).toBe(nums)  //  would fail because reference isnt the same
        expect(nums2).toBe(nums)  // passes because same ref in memory
    })

    test('playing with toContain', function () {
        const colors = ['red', 'orange'];

        expect(colors).toContain('orange');
        expect('hello').toContain('hell');
    })

    test('playing with Numerators', function () {

        expect(7).toBeGreaterThanOrEqual(2);
    })

    test('playing with Boolean', function () {

        expect('hi').toBeTruthy();
        expect('').toBeFalsy();
    })
  });
