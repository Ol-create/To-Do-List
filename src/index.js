import _, { forEach } from 'lodash';
import './style.css';

// declear global variable
  let todoTask = [
    {"description":"First, wake-up", "completed": false , "index": 0},
    {"description":"Second, do exercise", "completed": false , "index": 1},
    {"description":"Third, say a prayer", "completed": false , "index": 2},
    {"description":"Fourth, bath yourself", "completed": false , "index": 3},
    { "description":"Fifth, wear a cloth", "completed": false , "index": 4 }
];

const divBox = document.createElement('div');
const list = document.querySelector('#list');
