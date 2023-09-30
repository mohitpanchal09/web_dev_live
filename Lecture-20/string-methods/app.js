// let str ='Maverick is a good dog'

// length=>property=>dont have to be called

// console.log(str.length)
// methods=>need to be called

// 2. toUpperCase()

// let ans = str.toUpperCase()
// console.log(ans)

// 3. toLowerCase()=>method

// let ans = str.toLocaleLowerCase()
// console.log(ans)
// console.log(str)

// 4. trim()=>remove extra space form start and last
// let str='   smarth vohra   '
// console.log(str)
// console.log(str.length)
// let trimmedStr= str.trim()
// console.log(trimmedStr)
// console.log(trimmedStr.length)
// console.log(str)

// 5. includes()=>method=> a boolean value

// str='marverick is a good boy'
// // let ans=str.includes(' mav')
// let ans=str.includes(' ')

// console.log(ans)



// ----------------------------chaining of methods is possible🥰----------------------------------------------


let str= '    marverick is a good boy      '
console.log(str.length)
let ans = str.trim().toUpperCase()
console.log(ans)