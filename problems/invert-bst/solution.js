/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const invertTree = function(root) {
if (!root) return [];
const queue = [root];
while (queue.length) {
    const node = queue[0];
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    queue.shift();
}
  return root;
};
