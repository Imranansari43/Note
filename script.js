const container = document.querySelector('.container');
const button = document.querySelector('.add');
const newContainer = document.querySelectorAll('note');
const save = document.querySelector('.save');


getdata();
function setdata(){
   localStorage.setItem("items", container.innerHTML);
}


function getdata(){
  let getdata =  localStorage.getItem("items");
  container.innerHTML = `${getdata}`;
}

button.addEventListener('click', ()=>{
   let newNote = document.createElement('div');
   newNote.classList.add('note');
   let para = document.createElement('p');
   para.setAttribute("contenteditable", "true");
   let newImages = document.createElement('img');
   newImages.src = "./trash.png";
   newNote.append(para);
   newNote.append(newImages);
   container.append(newNote);
   setdata();
})

container.addEventListener('click', (e)=>{
   if(e.target.tagName === "IMG"){
      e.target.parentElement.remove();
   }
})
save.addEventListener('click', ()=>{
   setdata();
})
