/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
let mergeTwoLists = function (list1, list2) {
  console.log("*******************************");
  console.log("list1", list1);
  console.log("list2", list2);

  const newList = list1.concat(list2).sort();
  console.log(newList);
};

export default mergeTwoLists;
