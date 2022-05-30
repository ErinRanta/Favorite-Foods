









function askFood() {
favoriteFood = prompt("What is your favorite food?")
console.log(favoriteFood);
document.write(favoriteFood + " is " + " yummy " + " but " + " nachos " + " are " + " better! ");

}





function customMessage(){
    let message = "";
    if (favoriteFood == "nachos"){
        message = "YUM!"
        document.write(message);
     } else if (favoriteFood == "tacos") {
            message = "ooooooo!";
            document.write(message);
     } else {
         message = "best!";
         document.write(message);
     }

        }

        
    
customMessage();
askFood();
    
    
        
    







