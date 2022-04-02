let username=document.querySelector(".username")
let container=document.querySelector(".login")
let form =document.querySelector("form")
let btn=document.querySelector(".btn")
let table=document.querySelector(".m388")
let table403=document.querySelector(".m403")
let table420=document.querySelector(".m420")
let password=document.querySelector(".password")

btn.addEventListener("click",(eo) => {
  eo.preventDefault();
  if(username.value==''){
    container.innerText+=("is empty")
      }else if(username.value==388 ){
       
        table.classList.add("unhiden")
    
      }
      if(username.value==''){
        container.innerText+=("is empty")
          }else if(username.value==403 && password.value==1998){
            table.remove();
        table403.classList.add("unhiden4")
        
          }
          if(username.value==''){
            container.innerText+=("is empty")
              }else if(username.value==420 ){
                table403.remove();
            table420.classList.add("unhiden420")}
})