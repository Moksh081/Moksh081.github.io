let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minutesItem = document.querySelector("#minutes");
let secondsItem = document.querySelector("#seconds");

let countDown = () => {
    let futureDate = new Date("2 Sep 2023 14:45:00").getTime();
    let currentDate = new Date().getTime();
    let myDate = futureDate - currentDate;

     let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
     let hours = Math.floor(myDate / 1000 / 60 / 60 )% 24;
     let minutes = Math.floor(myDate / 1000 / 60 ) % 60;
     let seconds = Math.floor(myDate / 1000) % 60;

     daysItem.innerHTML = days;
     hoursItem.innerHTML = hours;
     minutesItem.innerHTML = minutes;
     secondsItem.innerHTML = seconds;
}
countDown()

setInterval(countDown , 1000)

function sendmail(){
    var params={name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,}
const serviceId= "service_l0y4p73";
const templateId = "template_qixsu2e";

emailjs.send(serviceId,templateId,params)
.then(
    (res)=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message has been succesfully sent");
    }
)
.catch((err) => console.log(err));
};