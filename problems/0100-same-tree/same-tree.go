/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSameTree(p *TreeNode, q *TreeNode) bool {
	stack := [][2]*TreeNode{{p, q}}

	for len(stack) > 0 {
		curr := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		nodeP, nodeQ := curr[0], curr[1]

		if nodeP == nil && nodeQ == nil {
			continue
		}

		if nodeP == nil || nodeQ == nil {
			return false
		}

		if nodeP.Val != nodeQ.Val {
			return false
		}

		stack = append(stack, [2]*TreeNode{nodeP.Left, nodeQ.Left})
		stack = append(stack, [2]*TreeNode{nodeP.Right, nodeQ.Right})
	}

	return true
}