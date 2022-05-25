export class Model{
    constructor(dataArray) {
        this.currentID = 0;
        this.dataArray = dataArray;
    }
    updateCurrentID(newid){
      this.currentID=newid;
    }
    updateArray(updatetext){
      this.dataArray[this.currentID].title = updatetext;
    }    
}