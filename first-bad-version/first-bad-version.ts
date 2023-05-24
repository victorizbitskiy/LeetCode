/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: (version: number) => boolean) {

  return function (n: number): number {
    let start = 0;
    let end = n;
    let lastBadVersion = 1;

    while (start <= end) {
      let middle = Math.floor((start + end) / 2);

      if (isBadVersion(middle)) {
        end = middle - 1;
        lastBadVersion = middle;
      } else {
        start = middle + 1;
      }
    }

    return lastBadVersion;
  };
};