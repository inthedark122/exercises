/**
 * arr = [
 *  {id: 1, parentId: null, title: "task 1"},
 *  {id: 2, parentId: 1, title: "task 2"},
 *  {id: 3, parentId: 1, title: "task 3"},
 *  {id: 4, parentId: 2, title: "task 4"},
 *  {id: 5, parentId: null, title: "task 5"},
 *  {id: 6, parentId: 3, title: "task 6"},
 *  {id: 7, parentId: 1, title: "task 7"},
 *  {id: 8, parentId: 2, title: "task 8"},
 * ]
 */

exports.arrayToTree = function (arr) {
  const treeArray = [
    {
      title: 'task1',
      childs: []
    }
  ]

  return treeArray
}
