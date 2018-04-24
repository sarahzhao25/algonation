function validateBst(tree) {
  // Write your code here.
	return treeHelper(tree, -Infinity, Infinity);
}

function treeHelper(tree, low, high) {
	console.log(tree, low, high)
	if (tree.value >= low && tree.value < high) {
		let left = true, right = true;
		if (tree.left) left = treeHelper(tree.left, low, tree.value);
		if (tree.right) right = treeHelper(tree.right, tree.value, high);
		return left && right;
	}
	return false;
}
