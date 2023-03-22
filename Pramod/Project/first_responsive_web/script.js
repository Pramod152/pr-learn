// JavaScript for sending the form data by email using EmailJS
const form = document.getElementById("my-form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the form from being submitted

  // get the form data
  const data = new FormData(form);

  // send the form data by email using EmailJS
  sendFormDataByEmail(data);
});

function sendFormDataByEmail(data) {
  // your EmailJS configuration goes here
  emailjs.init("unknownSender");

  // send the email
  emailjs
    .send("gmail", "template_zG3v3PQo", {
      to_email: "pramodghimire96@gmail.com",
      from_name: data.get("name"),
      from_email: data.get("email"),
      message: "This is a test message",
    })
    .then(
      function (response) {
        console.log("Success!", response.status, response.text);
      },
      function (error) {
        console.log("Failed...", error);
      }
    );
}
