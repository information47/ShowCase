const btn1 = document.querySelector('#btn_a');
const btn2 = document.querySelector('#btn_b');
const btn2_5 = document.querySelector('#btn_b_2');
const btn3 = document.querySelector('#btn_c');
const btn4 = document.querySelector('#btn_d');
const list = document.getElementById('list');
const form = document.querySelector('form');
const item = document.getElementById('item');
const cont = document.querySelectorAll('.container');
const text = document.querySelectorAll('.text');
const div1_parent = document.querySelector('.page');
let nbr_id = 0;
console.log(nbr_id);


// // zone texte //

btn1.addEventListener('click', () => {

  const new_dt = document.createElement('div');
  new_dt.setAttribute("class","text movable");

  const new_p= document.createElement('p');
  var newContent = document.createTextNode('inserer text')
  new_p.appendChild(newContent);
  new_dt.appendChild(new_p);
  div1_parent.appendChild(new_dt);
  nbr_id = nbr_id + 1;
  for (let i = 0; i < 100; i++) {
    new_dt.setAttribute("id", nbr_id); 
    
  }
});

// //zone image //


btn2_5.addEventListener('click', () => {
  
  console.log("test btn2.5");
  
  var new_di = document.getElementById("image");


  // new_di.setAttribute("style",'center/cover; position: absolute; left: -10vw; top: 10vh; width: 50vw; height: 50vh;');
  // new_di.setAttribute("class","image movable");

  // nbr_id = nbr_id + 1;
  // for (let i = 0; i < 100; i++) {
  //   new_di.setAttribute("name", nbr_id); 
    
  // }
});

function loadFile(event) {

    var loadFile = function(event) {       
      console.log(output);
      output.src = URL.createObjectURL(event.target.files[0]);
    };
  
}
// zone formes //

btn3.addEventListener('click', () => {

  const new_df = document.createElement('div');
  new_df.setAttribute("class"," forme exemple movable");
  div1_parent.appendChild(new_df);

  nbr_id = nbr_id + 1;
  for (let i = 0; i < 100; i++) {
    new_df.setAttribute("id", nbr_id); 
    
  }
});


//boutton //

btn4.addEventListener('click', () => {
console.log("click");
  const new_dd = document.createElement('div');
  new_dd.setAttribute("class"," movable");
  
  const new_db = document.createElement('button');
  new_db.setAttribute("class"," boutton movable"); 
  new_dd.appendChild(new_db);
  div1_parent.appendChild(new_dd);

  nbr_id = nbr_id + 1;
  for (let i = 0; i < 100; i++) {
    new_db.setAttribute("id", nbr_id); 
    
  }
});
