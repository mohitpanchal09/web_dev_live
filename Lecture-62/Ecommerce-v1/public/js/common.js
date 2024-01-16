let allLikeButton = document.querySelectorAll('.like-btn')


async function likeButton(productId,btn){
    try{
        let response = await axios({
            method:'post',
            url:`/products/${productId}/like`,
            headers:{
                'X-Requested-With':'XMLHttpRequest'
            }
        })
        if(response.data=='liked'){
            console.log('liked')
            btn.children[0].classList.remove('fa-regular')
            btn.children[0].classList.add('fa-solid')

            
        }else{
            btn.children[0].classList.remove('fa-solid')
            btn.children[0].classList.add('fa-regular')

            console.log('unliked')

        }
        console.log(response)
    }catch(err){
        console.log(err)
        window.location.replace('/login')

    }
   
}

for(let btn of allLikeButton){
    btn.addEventListener('click',()=>{
        let productId=btn.getAttribute('product-id')

        likeButton(productId,btn);
    })
}