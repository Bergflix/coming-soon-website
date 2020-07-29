document.getElementById("newsletter").onsubmit = e => {
  e.preventDefault(true);
  let email = (new FormData(e.target)).get("email");
  fetch("https://api.mailchimp.com/3.0", {
    method: "POST",
    headers: {},
    body: JSON.stringify({email})
  }).then(response => {
    console.log(response);
  });
};
