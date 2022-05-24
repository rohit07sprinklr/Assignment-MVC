import {truncateMiddle} from './FontTruncate.js'

export class View{
    constructor(){  
    }
    updateImage(currentImage){
        const imageDisplay = document.querySelector(".image-display");
        imageDisplay.innerHTML = `
        <img src="${currentImage}"></img>
        `
    }

    // textboxmarkup() changes the innerHTML of the label box 
    textBoxMarkup(currentTitle){
        const textbox = document.querySelector("#textboxid");
        textbox.innerHTML= `
        ${currentTitle}
        `
    }
    // markup
    markup = (currentID,currentTitle,currentImage)=>{
        return`
        <div class="listitem" id="${currentID}">
        <img src="${currentImage}" class="image-logo"></img>
        ${truncateMiddle(currentTitle,document.getElementsByClassName("image-list")[0])}</div>
        `
    }
    updateListItem =(currentID,currentTitle,currentImage)=> {
        document.getElementById(currentID).innerHTML = `
            <img src="${currentImage}" class="image-logo"></img>
            ${truncateMiddle(currentTitle,document.getElementsByClassName("image-list")[0])}</div>
        `
    }
    updateList = (currentID,currentTitle,currentImage)=>{
        const imagelist = document.querySelector(".image-list");
        imagelist.innerHTML= imagelist.innerHTML + (this.markup(currentID,currentTitle,currentImage));
    }

    displayList = (dataArray)=>{
        const imagelist = document.querySelector(".image-list");
        imagelist.innerHTML= imagelist.innerHTML + (this.markup(element,id));
    }
    bindMouseClick = (handler) => {
        const listitem = document.getElementsByClassName("listitem");
        listitem.map = Array.prototype.map;
        listitem.map((element) => element.addEventListener('click',(event)=>{
        handler(element);
      }))
    }   
    bindKeyDown= (handler)=>{
        document.addEventListener('keydown',(event)=>{
            handler(event);
        });
    }    
    bindInput =(handler)=>{
        const textbox = document.getElementById('textboxid');
        textbox.addEventListener('input', (event)=>{
            handler(event);
        });
    }
}