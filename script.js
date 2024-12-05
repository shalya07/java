
//const btn= document.getElementsByClassName("btn");
const btn1=document.getElementById("btn1");
const btn2= document.getElementById("btn2");
const btn3= document.getElementById("btn3");
btn1.addEventListener("click", function(){button("item1");});
btn2.addEventListener("click", function(){button("item2");});
btn3.addEventListener("click", function(){button("item3");});

function button(listID){
   const value= prompt("please enter task name");
    if(value === null || !value.trim())
       return alert("task name can't be empty")
    const listitem= document.getElementById(listID)
    const virtualelement= document.createElement("li")
    virtualelement.setAttribute("draggable", true);
    const btn=document.createElement("button");
    btn.innerText= "X";
    virtualelement.innerText=value;
    virtualelement.appendChild(btn);
    btn.addEventListener("click", ()=>{
        virtualelement.remove();
    })
    listitem.appendChild(virtualelement); 
    

    virtualelement.addEventListener("dragstart",(e)=>{
        e.target.style.opacity = 0.5;
    })
    virtualelement.addEventListener("dragend", (e)=>{
        e.target.style.opacity = "";
    })
    listitem.addEventListener("dragover", (e)=>{
        console.log(e.target);
        e.preventDefault();
    })
    listitem.addEventListener("drop", (e)=>{
        console.log(e.target);
        e.preventDefault();
        const draggValue= e.dataTransfer.getData("text");
        const draggedItem = Array.from(listitem.children).find(child => child.innerText === draggValue); 
        if (draggedItem) {
            listitem.appendChild(draggedItem); // Re-append the dragged item (this is where you could also reorder)
        }
    })
}


