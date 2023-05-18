/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
  const array = new Array();
  let i = 0;

  while (head) {
    if (!array.includes(head)) {
      array[i] = head;
      i++;
    }else{
      return head;
    }
    head = head.next;
  }
  return null;
};