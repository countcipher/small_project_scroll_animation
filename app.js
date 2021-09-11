const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);
window.addEventListener('resize', checkBoxes);

checkBoxes();

function checkBoxes(){
   const triggerBottom = window.innerHeight - 150;

   boxes.forEach(box => {
       const boxTop = box.getBoundingClientRect().top;

       if(boxTop < triggerBottom){
            box.classList.add('show');
       }else{
           box.classList.remove('show');
       }
   });
}