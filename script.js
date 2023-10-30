
        //kilograms to pounds
       
            function pound(){
            if(document.querySelector("#weight").value!=0){
                
                var kg = document.querySelector("#weight").value;
                var lb = kg*2.2046;
                document.querySelector("#pound").innerHTML = kg+" kilogram = " + lb +" pound";
                    
                }else{
                    alert("please enter number you want to convert.")
                }    
            }
        //Kilograms to Ounces
            function ounces(){
            if(document.querySelector("#weight").value!=0){
                    var kg = document.querySelector("#weight").value;
                    var oz = kg*35.274;
                    document.querySelector("#ounces").innerHTML =kg+" kilogram = " + oz + " ounces";

                }else{
                    
                    alert("please enter number you want to convert.")

                }
            }
        //Kilograms to Grams
        function gram(){
        if(document.querySelector("#weight").value !=0){
             var kg = document.querySelector("#weight").value;
                var grm = kg*1000;
                document.querySelector("#gram").innerHTML=kg+" kilogram = " + grm + " grams";

            }else{
             alert("please enter number you want to convert.")
                
            }
        }    
        // Kilograms to Stones
        function stones(){
             if(document.querySelector("#weight").value!=0){
                var kg = document.querySelector("#weight").value;
                var st =kg*0.1574;
                document.querySelector("#stones").innerHTML=kg+" kilogram = " + st + " stones";

            }else{
                alert("please enter number you want to convert.");
                
            }
            
        }

