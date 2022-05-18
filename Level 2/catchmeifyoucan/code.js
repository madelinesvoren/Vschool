//1A
function add(x, y){
    const sum = x + y
    
    if(isNaN(x, y)) throw "not a number";
    
    return sum
}
//1B
try{
    add(x, y);
    let x = "1"
    let y = "2"
}
catch{
    console.log("error")
}

