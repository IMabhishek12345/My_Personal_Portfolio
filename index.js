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