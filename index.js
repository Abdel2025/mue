function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_o575jxk";
  const templateID = "template_81173m7";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your was message sent successfully!!")

    })
    .catch(err=>console.log(err));

}
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy