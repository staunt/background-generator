const array = [1, 2, 3, 16]


const double = []

const newArray = array.forEach((num) =>{
    double.push(num *2);

}
console.log(double)


const mapArray = array.map((num)=>{
    return num *2
})


console.log("map",mapArray)