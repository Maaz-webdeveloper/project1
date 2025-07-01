    var a = document.querySelector("h5");

var addFriend= document.querySelector("#add");
var removefriend = document.querySelector("#remove");

addFriend.addEventListener("click", function(){
a.innerHTML = "Friends";
a.style.color = "green"
});

removefriend.addEventListener("click", function(){
a.innerHTML = "Stranger";
a.style.color = "red"
});