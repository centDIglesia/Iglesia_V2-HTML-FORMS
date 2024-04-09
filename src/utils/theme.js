export default function themeChange() {
  const themeBTN = document.querySelectorAll(".sun-js");


  themeBTN.forEach(btn => {
    btn.addEventListener('click',()=>{
        document.body.classList.toggle('light-mode');
    })
  });
}


