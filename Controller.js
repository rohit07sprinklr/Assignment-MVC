export class Controller{
    constructor(model,view){
        this.model = model;
        this.view = view;

        this.startRendering(this.model.dataArray);

        this.view.bindKeyDown(this.handleKeyDown);
        this.view.bindMouseClick(this.handleMouseClick);
        this.view.bindInput(this.handleInput);

    }   
    startRendering() {
        this.model.dataArray.forEach((element,id) => {
            this.view.updateList(id,element.title,element.previewImage);
        });
        
        const initActiveItemID=0;
        this.model.updateCurrentID(initActiveItemID);
        this.view.updateImage(this.model.dataArray[initActiveItemID].previewImage);
        this.model.setActive();
        this.view.textBoxMarkup(this.model.dataArray[this.model.currentID].title);
    }

    handleMouseClick = (element)=>{
        this.model.updateCurrentID(element.id);
        this.view.updateImage(this.model.dataArray[element.id].previewImage);
        this.model.setActive();
        this.view.textBoxMarkup(this.model.dataArray[element.id].title);
    }

    handleKeyDown = (event)=>{
        if(event.code=='ArrowDown'||event.code=='ArrowUp'){
            if(event.code=='ArrowDown' && this.model.currentID+1 < this.model.dataArray.length){
                this.model.updateCurrentID(this.model.currentID+1);
                this.view.updateImage(this.model.dataArray[this.model.currentID].previewImage);
                this.view.textBoxMarkup(this.model.dataArray[this.model.currentID].title);
            }
            else if(event.code=='ArrowUp' && this.model.currentID>0 ){
                this.model.updateCurrentID(this.model.currentID-1);
                this.view.updateImage(this.model.dataArray[this.model.currentID].previewImage);
                this.view.textBoxMarkup(this.model.dataArray[this.model.currentID].title);
            }
            this.model.setActive();
        }
    }
    
    handleInput = (event)=>{
        this.model.updateArray(event.srcElement.innerText);
        this.view.updateListItem(this.model.currentID,event.srcElement.innerText,this.model.dataArray[this.model.currentID].previewImage);
    }
}