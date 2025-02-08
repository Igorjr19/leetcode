# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        number1 = ''
        current = l1
        while current != None:
            number1 = str(current.val) + number1
            current = current.next

        number2 = ''
        current = l2
        while current != None:
            number2 = str(current.val) + number2
            current = current.next

        answer_arr = list(str(int(number1) + int(number2)))[::-1]
        answer = ListNode(answer_arr[0], None)
        current = answer
        for i in range(len(answer_arr)):
            if i == 0:
                continue
            current.next = ListNode(answer_arr[i], None)
            current = current.next
        return answer