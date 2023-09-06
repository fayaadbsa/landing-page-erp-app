const { sortReverse, maxSubarray, sumNested } = require("./test-1");

describe("Unit Test", () => {
  test("Sort Reverse (Descending)", () => {
    expect(sortReverse([1, 2, 4, 3, 5, 3, 2, 1])).toStrictEqual([
      5, 4, 3, 3, 2, 2, 1, 1,
    ]);
  });

  test("Max Subarray", () => {
    expect(maxSubarray([100, 200, 300, 400], 2)).toBe(700);
    expect(maxSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
    expect(maxSubarray([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
  });

  test("Sum Nested Even", () => {
    expect(
      sumNested({
        outer: 2,
        obj: {
          inner: 2,
          otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup",
          },
        },
      })
    ).toBe(6);
    expect(
      sumNested({
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: "ball", ccc: 5 },
        d: 1,
        e: { e: { e: 4 }, ee: "car" },
      })
    ).toBe(12);
  });
});
