function sendMail(){
    let parms={
        name : document.getElementById("name").value,
        email : document.getElementById("email").Value,
        subject : document.getElementById("subject").Value,
        messsage : document.getElementById("message").Value,
        
    }

    emailjs.send("service_pen5fuj","service_pen5fuj",parmas).then(alert("Email Sent!!"))
}