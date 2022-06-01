










function askFood() {
favoriteFood = prompt("What is your favorite food?")
console.log(favoriteFood);
document.write(favoriteFood + " are " + " yummy " + " but " + " nachos " + " are " + " better! ");

}





function customMessage(){
    let message = "";
    if (favoriteFood == "nachos"){
        message = "YUM!"
        document.write(message);
     } else if (favoriteFood == "tacos"){
            message = "ooooooo!";
            document.write(message);
     } else {
         message = "best!";
         document.write(message);
     }

       
     function ratePage(){
        let userNumber = prompt("How many avocados would you rate my page? 1-4");
        for (let i = 1; i <= userNumber; i++){
            console.log(userNumber)
            document.write("<img src='Images/avocado.jpg' />");
        }
    }  
        ratePage();









    
    
    }
        

        
    
        


        





            
userNumber();
        

            ratePage();     



ratePage()
        
    
customMessage();





    







