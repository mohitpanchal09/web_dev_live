// console.log($) //jquery=$

// selection of elements

let h1=$('h1') //document.queryselectorAll(h1)
console.log(h1)

let para= $('p') //select the paragraph
console.log(para)
let para2=$('#samarth')
console.log(para2)


// -----------------------------
// mainpulation--------

// styling
para.css('color','red')
para.css('background-color','yellow')
// better method for styling
para.css({
    border:'2px solid blue',
    fontSize:'45px'
})

// text accessing
// getter
console.log(para.text())
// setter
para.text('sab piche hai')

// attributes
// getter
let input = $('input')
console.log(input.attr('id'))
// setter
input.attr('type','date')

// ----------------------
let lis =$('ul li').first()
let lastLis = $('ul li').last()
lis.css('color','green')
lastLis.css('background-color','red')
console.log(lis)

// to get the value out of the input

console.log(input.val()) //getter
input.val('hello world') //setter


// class attributes--------------

let h2=$('h2')
// add
h2.addClass('a')
h2.addClass('a b')

// remove
h2.removeClass('a')

//toggle
h2.toggleClass('c')
console.log(h2.hasClass('b'))