export default function(ev){
    const btn = ev.currentTarget;
    if(btn.innerText === "Copy"){
        btn.innerText = "Copied!";
        btn.classList.add("sucess");
        navigator.clipboard.writeText(document.querySelector("#result").value);
    }else{
        btn.innerText = "Copy";
        btn.classList.remove("sucess");
    }
}