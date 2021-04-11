function closeOverlay(elem) {
    document.main.removeChild(elem.parentElement)
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
   document.main.innerHtml+=overlayContent
 }