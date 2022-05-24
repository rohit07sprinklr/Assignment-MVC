export class Controller{
    constructor(model,view){
        this.model = model;
        this.view = view;

        this.onStart(this.model.dataArray);

        this.view.bindKeyDown(this.handleKeyDown);
        this.view.bindMouseClick(this.handleMouseClick);
        this.view.bindInput(this.handleinput);

    }   
    handleMouseClick = (element)=>{
        this.model.updateCurrentID(element.id);
        this.view.updateImage(this.model.dataArray[element.id].previewImage);
        this.model.setActive();
        this.view.textboxmarkup(this.model.dataArray[element.id].title);
    }
    handleKeyDown = (event)=>{
        if(event.code=='ArrowDown'||event.code=='ArrowUp'){
            if(event.code=='ArrowDown' && this.model.currentID+1 < this.model.dataArray.length){
                this.model.updateCurrentID(this.model.currentID+1);
                this.view.updateImage(this.model.dataArray[this.model.currentID].previewImage);
                this.view.textboxmarkup(this.model.dataArray[this.model.currentID].title);
            }
            else if(event.code=='ArrowUp' && this.model.currentID>0 ){
                this.model.updateCurrentID(this.model.currentID-1);
                this.view.updateImage(this.model.dataArray[this.model.currentID].previewImage);
                this.view.textboxmarkup(this.model.dataArray[this.model.currentID].title);
            }
            this.model.setActive();
        }
    }
    
    handleinput = (event)=>{
        this.model.updateArray(event.srcElement.innerText);
        this.view.updateListItem(this.model.currentID,event.srcElement.innerText,this.model.dataArray[this.model.currentID].previewImage);
        // current[0].innerHTML =`
        // <p class="listitemtext"><img src="${dataArray[currentID].previewImage}" class="logo"></img>
        // ${truncateMiddle(event.srcElement.innerText,document.getElementsByClassName("imagelist")[0])}</p>
        // </div>
        // `;
    }

    onStart = (dataArray)=>{
        let id = 0;
        this.model.dataArray.forEach(element => {
            this.view.updateList(id,element.title,element.previewImage);
            id++;
        });
        
        this.model.updateCurrentID(0);
        this.view.updateImage(this.model.dataArray[0].previewImage);
        this.model.setActive();
        this.view.textboxmarkup(this.model.dataArray[this.model.currentID].title);
    }
}