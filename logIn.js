//Actual code

let database =[
    {
        username: "andy",
        password: "secret"
    },
    {
        username: "jess",
        password: "123"
    },
    {
        username: "cess",
        password: "1234"
    }
];



let 
button = document.getElementById("enter");
let input = document.getElementById("userInput");
let passput = document.getElementById("userpass");

// function checklog(user, pass){
//     if (database[0].username === user && database[0].password === pass){
//         console.log("done")
//     }
// }

// function inputValue(){
//     input.value ===database[0].username && passput.value === database[0].password
       
// }
const isUservalid =(input, passput) =>{
    for (var i=0; i<database.length; i++){
        if (input.value ===database[i].username && passput.value === database[i].password){
                    return true;
                }
            }
            return false
        }

button.addEventListener("click", ()=>{
    if (isUservalid(input, passput)){
        location.replace('home.html')
     }else{
       alert("wrong user")
     }
    
})

// button.addEventListener("keypress",function(event){
//     if (isUservalid() && event.keyCode === 13){
//         location.replace('home.html')
//      }else{
//         alert("wrong username and password")
//      }
//   })

//practice 
// var Logs =[
//     {
//       logIn: "cele",
//       password: "123"

//     },
//     {
//         logIn: "june",
//         password: "1234"
  
//       },
//       {
//         logIn: "okey",
//         password: "12345"
  
//       }

// ]

// var newsfeed =[
//     {
//         coo:"wooelnskrndbkehe"
//     }
// ]

//  function isUservalid(log,pass){
//     for(var i =0; i<Logs.length; i++){
//         if (Logs[i].logIn === log && Logs[i].password === pass){
//             return true
//         }
//     }
//     return false
//  }

// function logIn(log, pass){
    
    
//         if (isUservalid(log,pass)){
//             var h1 =document.querySelector("h1")
//             h1.className="coldpen";
//         }
    

//     // if (log===Logs[0].logIn && pass === Logs[0].password){
//     //     console.log(newsfeed)
        
//     // }
// // }
// // var logInprompt = prompt("what is your log in")
// // var passwordprompt = prompt("what is your Password")

// logIn(logInprompt,passwordprompt )





// let btn = document.querySelector('button')
// btn.addEventListener('click',()=>{
//     window.history.back()
// })



// var button = document.getElementById("enter");
// var input = document.getElementById("userInput")
// var ul = document.querySelector("ul")



// function inputLength(){
//     return input.value.length
// }
// function createListElement(){
//     var li = document.createElement("li");
//         li.appendChild(document.createTextNode(input.value))
//         ul.appendChild(li);
//         input.value=""
// }





// button.addEventListener("click", function(){
//     if (inputLength()>0){
//        createListElement();
//     }
// })

// input.addEventListener("keypress", function(event){
//     if (inputLength() >0 && event.which === 13){
//         createListElement();
//     }
// })









