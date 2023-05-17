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

function middleNode(head: ListNode | null): ListNode | null {
    const map = new Map();
    let listNodeIndex = 0;
    let middleMapIndex = 0;

    while (head) {
        map.set(listNodeIndex++, head);
        head = head.next
    }

    middleMapIndex = Math.floor((map.size / 2));
    return map.get(middleMapIndex);
};