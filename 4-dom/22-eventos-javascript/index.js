function register(ev){
  console.log(ev);
  const sectionElement = ev.currentTarget.parentNode;
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value;

  if(password === passwordConfirmation){
    alert(`Usuário ${username} registrado!`);
  }else{
    alert("As senhas não conferem!");
  }
}

function removeListener(){
  button.removeEventListener("click", register);
  alert("evento removido!");
}

const button = document.getElementById("register-button");

button.addEventListener("click", register);
button.addEventListener("mouseover", function (ev){
  console.log(ev.currentTarget);
})