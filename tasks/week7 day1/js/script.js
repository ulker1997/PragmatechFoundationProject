let left=document.querySelector('#left')
let right=document.querySelector('#right')
let content=document.querySelector('.slide-content')

pos=0;
left.addEventListener('click',function(){
     content.style.transform=`translateX(${pos}px)`
    pos+=1000;
})
right.addEventListener('click',function() {
    content.style.transform=`translateX(${pos}px)`
    pos-=1000;
})

