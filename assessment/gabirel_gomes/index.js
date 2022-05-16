import mergeTwoLists from "./question1/index.js";

if (process.env.npm_lifecycle_event === "question1") {
  const list1 = [1, 2, 4];
  const list2 = [1, 3, 4];

  mergeTwoLists(list1, list2);
}

if (process.env.npm_lifecycle_event === "question2") {
  console.log("here");
}