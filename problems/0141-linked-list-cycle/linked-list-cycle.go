/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func hasCycle(head *ListNode) bool {
	visited := make(map[*ListNode]bool)
	return iterate(head, visited)
}

func iterate(head *ListNode, visited map[*ListNode]bool) bool {
	if head == nil {
		return false
	}

	if visited[head] {
		return true
	}

	visited[head] = true

	return iterate(head.Next, visited)
}