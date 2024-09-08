let addbtn=document.querySelector(".button");
let delbtn=document.querySelector(".del");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
addbtn.addEventListener("click",function() {
      let items=document.createElement("li");
      items.classList.add("li");
      items.innerText=inp.value;
      ul.appendChild(items);
      inp.value="";

      let delbtn=document.createElement("button");
      delbtn.innerText="delete";
      delbtn.classList.add("del");
      items.appendChild(delbtn);
});

    ul.addEventListener("click" ,function(event) {
        if(event.target.nodeName=="BUTTON") {
            let parent = event.target.parentElement;
            parent.remove();
            
        }
          
    })
