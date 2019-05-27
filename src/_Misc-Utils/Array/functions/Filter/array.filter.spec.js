import filter from './array.filter'

test('should Filter array of strings', () => {
  const arrayOfStrings = ['1', '2', '3']
  const result = filter({
    array: arrayOfStrings,
    post: '',
    condition: '===',
    value: '3',
  })
  expect(result).toContain('3')
})

// test('should Filter array of strings and numbers', () => {
//   const arrayOfStrings = ['1', '2', 3]
//   const result = filter({
//     array: arrayOfStrings,
//     post: '',
//     condition: '===',
//     value: 3,
//   })
//   expect(result).toContain('3')
// })

// should Filter array of objects
