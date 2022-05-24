import {truncateMiddle} from './FontTruncate.js'
export class View{
    constructor(){  
    }
    getElement(selector) {
        const element = document.querySelector(selector)
        return element
    }

    updateImage(currentImage){
        const imagedisplay = document.querySelector(".imagedisplay");
        imagedisplay.innerHTML = `
        <img src="${currentImage}"></img>
        `
    }

    // textboxmarkup() changes the innerHTML of the label box 
    textboxmarkup(currentTitle){
        const textbox = document.querySelector(".textbox");
        textbox.innerHTML= `
        ${currentTitle}
        `
    }
    markup = (currentID,currentTitle,currentImage)=>{
        return`
        <div class="listitem" id="${currentID}">
        <img src="${currentImage}" class="logo"></img>
        ${truncateMiddle(currentTitle,document.getElementsByClassName("imagelist")[0])}</div>
        `
    }
    updateListItem =(currentID,currentTitle,currentImage)=> {
        document.getElementById(currentID).innerHTML = `
            <img src="${currentImage}" class="logo"></img>
            ${truncateMiddle(currentTitle,document.getElementsByClassName("imagelist")[0])}</div>
        `
    }
    updateList = (currentID,currentTitle,currentImage)=>{
        const imagelist = document.querySelector(".imagelist");
        imagelist.innerHTML= imagelist.innerHTML + (this.markup(currentID,currentTitle,currentImage));
    }

    displayList = (dataArray)=>{
        const imagelist = document.querySelector(".imagelist");
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