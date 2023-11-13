// $('button').click(()=>{
//     console.log('clicked')
// })
$('ul li').click((e)=>{
    $(this).css('color','red')
})

$('input').keydown(()=>{
    console.log('pressed key down')
})

// addevent listener()
$('button').on('click',()=>{
    let ans = $('input').val()
    console.log(ans)
})