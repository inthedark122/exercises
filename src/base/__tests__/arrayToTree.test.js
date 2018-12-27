const { arrayToTree } = require('../arrayToTree')

describe('arrayToTree', () => {
  const arr = [
    { id: 1, parentId: null, title: 'task 1' },
    { id: 2, parentId: 1, title: 'task 2' },
    { id: 3, parentId: 1, title: 'task 3' },
    { id: 4, parentId: 2, title: 'task 4' },
    { id: 5, parentId: null, title: 'task 5' },
    { id: 6, parentId: 3, title: 'task 6' },
    { id: 7, parentId: 1, title: 'task 7' },
    { id: 8, parentId: 2, title: 'task 8' }
  ]

  const arrResult = [
    {
      id: 1,
      title: 'task 1',
      parentId: null,
      childs: [
        {
          id: 2,
          parentId: 1,
          title: 'task 2',
          childs: [
            {
              id: 4,
              parentId: 2,
              title: 'task 4'

            }
          ]
        },
        {
          id: 3,
          parentId: 1,
          title: 'task 3',
          childs: [
            {
              id: 6,
              parentId: 3,
              title: 'task 6'
            }
          ]
        },
        {
          id: 7,
          parentId: 1,
          title: 'task 7'
        }
      ]
    },
    {
      id: 5,
      title: 'task 5',
      parentId: null,
      childs: [
        {
          id: 8,
          parentId: 2,
          title: 'task 8'
        }
      ]
    }
  ]

  it.skip('should be valid transformed array', () => {
    expect(arrayToTree(arr)).toEqual(arrResult)
  })
})
