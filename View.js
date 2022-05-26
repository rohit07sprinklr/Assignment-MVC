export class View{
    constructor(){  
    }
    isOverflown(element) {
        return (element.scrollWidth > element.clientWidth);
    }
    isvalid(element,orignalText,midIndex){
        const changedText = (orignalText.slice(0,midIndex) + '...'  +orignalText.slice(-midIndex)).toString();
        element.innerHTML =`${element.children[0].outerHTML}${changedText}`;
        return this.isOverflown(element);
    }
    truncate(currentID){
        const currentElement = document.getElementById(currentID);
        if(this.isOverflown(currentElement)==false)
            return;
        const orignalText = currentElement.innerText.toString();
        let l=0;
        let r=orignalText.length;
        let ans=0;
        while(l<r){
            let mid = Math.ceil((l+r)/2);
            if(this.isvalid(currentElement,orignalText,mid)==true){
                ans=mid;
                r=mid-1;
            }
            else
                l = mid+1;
        }
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
        const newImage = this.listMarkup(currentID,currentTitle,currentImage);
        imagelist.innerHTML= imagelist.innerHTML + newImage;
        this.truncate(currentID);
    }
    listMarkup = (currentID,currentTitle,currentImage)=>{
        return`
        <div class="listitem" id="${currentID}">
        <img src="${currentImage}" class="image-logo"></img>
        ${currentTitle}</div>
        `
    }

    updateListItem =(currentID,currentTitle)=> {
        const currentImage=(document.getElementById(currentID).children[0]).outerHTML;
        document.getElementById(currentID).innerHTML = `${currentImage} ${currentTitle}`
        this.truncate(currentID);
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