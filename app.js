var users = [];

function storeDetails() {
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  
  var user = {
    name: name,
    email: email,
    phone: phone
  };
  
  users.push(user);
  
  localStorage.setItem("users", JSON.stringify(users));
}

var storedUsers = JSON.parse(localStorage.getItem("users"));

var usersContainer = document.getElementById("usersContainer");

for (var i = 0; i < storedUsers.length; i++) {
  var user = storedUsers[i];
  
  var userDiv = document.createElement("div");
  userDiv.setAttribute("data-index", i);
  
  var nameP = document.createElement("p");
  nameP.innerHTML = "Name: " + user.name;
  
  var emailP = document.createElement("p");
  emailP.innerHTML = "Email: " + user.email;

  var phoneP = document.createElement("p");
  phoneP.innerHTML = "Phone: " + user.phone;
  
  var deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", function() {
    var userIndex = this.parentNode.getAttribute("data-index");
    deleteUser(userIndex);
  });

  userDiv.appendChild(nameP);
  userDiv.appendChild(emailP);
  userDiv.appendChild(phoneP);
  userDiv.appendChild(deleteBtn);
  
  usersContainer.appendChild(userDiv);
}

function deleteUser(index) {
  storedUsers.splice(index, 1);
  
  localStorage.setItem("users", JSON.stringify(storedUsers));
  
  usersContainer.removeChild(usersContainer.childNodes[index]);
}