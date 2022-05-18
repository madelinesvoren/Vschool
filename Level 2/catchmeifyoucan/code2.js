
var user = {username: "sam", password: "123abc"};
function login(username, password){
  if(!username === "sam", !password === "123abc") throw "username or login incorrect"
  else{
      console.log("login successful")
  }
}
try{
   login("maddie", "hello")
}
catch(err){
    console.log(err)
}
try{
    login("same", "123abc")
}
catch(err){
    console.log(err)
}
