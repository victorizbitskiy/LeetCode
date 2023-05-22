/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const levelMap = {};

  const scan = (node: TreeNode | null, level: number) => {
    if (levelMap[level]) {
      levelMap[level].push(node.val);
    } else {
      levelMap[level] = [node.val];
    }
    if (node.left) {
      scan(node.left, level + 1);
    }
    if (node.right) {
      scan(node.right, level + 1);
    }
  }
  scan(root, 0);
  
  return Object.values(levelMap)
};