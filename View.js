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

    // imageCaptionUpdate() changes the innerHTML of the label box 
    imageCaptionUpdate(currentTitle){
        const textbox = document.querySelector("#image-caption");
        textbox.innerHTML= `
        ${currentTitle}
        `
    }

    initializeList = (currentID,currentTitle,currentImage)=>{
        const imagelist = document.querySelector(".image-list");
        imagelist.innerHTML= imagelist.innerHTML + (this.listMarkup(currentID,currentTitle,currentImage));
    }
    listMarkup = (currentID,currentTitle,currentImage)=>{
        return`
        <div class="listitem" id="${currentID}">
        <img src="${currentImage}" class="image-logo"></img>
        ${truncateMiddle(currentTitle,document.getElementsByClassName("image-list")[0])}</div>
        `
    }

    updateListItem =(currentID,currentTitle)=> {
        const currentImage=(document.getElementById(currentID).children[0]).outerHTML;
        document.getElementById(currentID).innerHTML = `
            ${currentImage} ${truncateMiddle(currentTitle,document.getElementsByClassName("image-list")[0])}`
    }

    setActiveClass(currentID){
        const current = document.getElementsByClassName("active");
        if(current.length>0)
          current[0].className = current[0].className.replace(" active", "");
        document.getElementById(currentID).className += " active";
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
        const textbox = document.getElementById('image-caption');
        textbox.addEventListener('input', (event)=>{
            handler(event);
        });
    }
}