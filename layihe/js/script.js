function closeOverlay(elem) {
    document.body.removeChild(elem.parentElement)
 }
function showBigImage(elem) {
   let overlayContent=`
   <div class="overlay">
   <div class="close" onclick="closeOverlay(this)">
       <i class="fas fa-times"></i>
   </div>
   <img src="${elem.getAttribute('src')}" alt=""onclick="showBigImage(this)">  
 </div> 
   `
   document.body.innerHtml+=overlayContent
 }