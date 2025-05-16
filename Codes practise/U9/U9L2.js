function greetUser() {
  const name = document.getElementById("nameInput").value.trim();
  if (name === "") {
    alert("give me your nam");
  } else {
    alert("hello，" + name + "！welcome！");
  }
}
