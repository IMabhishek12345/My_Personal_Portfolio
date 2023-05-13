const handletabTitles=(id)=>{
   let tablinks=document.getElementsByClassName("tab-links");
   let tabcontents=document.getElementsByClassName("tab-contents");
   
   for (tablink of tablinks){
   tablink.classList.remove("active-link");
   }
  for (tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }   
  event.currentTarget.classList.add("active-link");
  document.getElementById(id).classList.add("active-tab");
}

let sidemenu=document.getElementById("sidemenu");
const openmenu=()=>{
  sidemenu.style.right="0";
}
const closemenu=()=>{
  sidemenu.style.right="-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbyE_f3CwCZ8pyUdUr6p8QBqZ87xf1xy2h3BabYRUFmaUmvjqYQofVWFtnZQDTDLnHJWZw/exec';
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      const msg=document.getElementById("msg");
      msg.innerHTML="Message sent Successfully";
      setTimeout(()=>{
        msg.innerHTML="";
      },1000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
