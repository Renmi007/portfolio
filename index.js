function sendMail(){
    var params = {
        name:document.getElementById("firstname").value,
        name:document.getElementById("lastname").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
    }
    const serviceID = "service_23iz1ra";
const templateID = "template_zpjcqti";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
    })
    .catch(err=>console.log(err))
}

