/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function preorder(root: Node | null): number[] {
  let result: number[] = [];

  if (root?.val !== undefined) {
    result.push(root.val);
  }

  for (let i = 0; i < root?.children.length; i++) {
    result = [...result, ...preorder(root?.children[i])];
  }
  return result;
};