const submitButton = document.getElementById("submit");
submitButton.onclick = e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("efni").value;
  const message = document.getElementById("skilabod").value;
  const date = new Date();

  db.collection("emails")
    .add({
      name: name,
      email: email,
      subject: subject,
      message: message,
      date: date
    })
    .then(() => {
      alert("Your email has beem recived");
    });
};
