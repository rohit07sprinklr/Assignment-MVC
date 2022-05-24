import {Controller} from './Controller.js';
import {Model} from './Model.js';
import {View} from './View.js';

// Using fetch API to fetch data from JSON file
fetch("./imgfile.json")
.then(response => {
return response.json();
})
.then(data => {
    // Work with JSON data here
    const dataArray = data;
    const app = new Controller(new Model(dataArray), new View());
});