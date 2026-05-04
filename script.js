function openForm() {
  document.getElementById("modal").style.display = "flex";
}

function closeForm() {
  document.getElementById("modal").style.display = "none";
}

function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const error = document.getElementById("error");

  // simple validation
  if (!name || !email || !message) {
    error.textContent = "All fields are required";
    return;
  }

  error.textContent = "";
  alert("Form submitted successfully!");
  closeForm();
}