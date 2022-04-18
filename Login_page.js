function Login() {
    username=document.getElementById("UserNameInput").value;
    localStorage.setItem("username",username);
    window.location="Find_a_room.html";
}