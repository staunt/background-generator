let css = document.querySelector("h2");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gredient")


const setGredient = ()=> {
    body.style.background="linear-gradient(to right, "
    + color1.value 
    +"," +color2.value 
    +")";
    css.textContent = body.style.background + ";"
}

color1.addEventListener ("input", setGredient)
color2.addEventListener ("input", setGredient)

// var database =[
//     {
//         username: "andy",
//         password: "secret"
//     },
//     {
//         username: "jess",
//         password: "123"
//     },
//     {
//         username: "cess",
//         password: "1234"
//     }
// ];
// var newsfeed =[
//     {
//         username: "andy",
//         timeline: "secret"
//     }
// ];

// function isUservalid(user, pass){
//        for (var i=0; i<database.length; i++){
//         if (database[i].username=== user && database[i].password === pass){
//             return true;
//         }
//     }
//     return "sorry "
// }
// function signin(user, pass) {
//           if (isUservalid(user,pass)){
//             console.log(newsfeed)
//         }else{
//            alert("sorry")
//         }
      

// }



// var usernamePrompt =prompt("whats your username ")
// var passwordPrompt =prompt("whats your password")



   


    

//     // if (user=== database[0].username && pass === database[0].password){
//     //     console.log(newsfeed)
//     // }else{
//     //     alert("wrong username and password")
//     // }
// //}

// signin(usernamePrompt,passwordPrompt)


