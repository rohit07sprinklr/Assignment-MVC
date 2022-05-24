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
    setActive(element){
      var current = document.getElementsByClassName("active");
      if(current.length>0)
        current[0].className = current[0].className.replace(" active", "");
      document.getElementById(this.currentID).className += " active";
    }     
}