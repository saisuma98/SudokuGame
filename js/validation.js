

//document.getElementById("Submit").onclick = function() {myFunction()};
//$(document).ready(

function test(){

    try{

    try{
        var ele00=document.getElementById('box00').value;
        alert(ele00);
    }catch(err){
        var ele00= $("#box00").text();
        alert(ele00);
    }

        var ele01=document.getElementById('box01').value;
        alert(ele01);
        var ele02=document.getElementById('box02').value;
        alert(ele02);
        var ele03=document.getElementById('box03').value;
        alert(ele03);
        var ele04=document.getElementById('box04').value;
        alert(ele04);
        var ele05=document.getElementById('box05').value;
        alert(ele05);
        var ele06=document.getElementById('box06').value;
        alert(ele06);
        var ele07=document.getElementById('box07').value;
        alert(ele07);
        var ele08=document.getElementById('box08').value;
        alert(ele08);
        var array1 ={ele00,ele01,ele02,ele03,ele04,ele05,ele06,ele07,ele08};

    }catch(err){
        //labelText = $("#myLabel").text()
        alert(err);

    }
        function validate2(){
            
            
            
            
            var a=[1,2,3,4,5,6,7,8,9];
            
            var flag=false;
            
            
            for(var k=0;k<9;k++){
               
                 flag=false;
                
                for(var i=0;i<9;i++){
                    
                        
                    if(a[k]==array1[i]){
                            
                        flag=true;
                                
                        break;
                        
                    }
                        
            
                        
                }
            
                
                
                if(flag===false){
                    
                    console.log("NOT unique");
                
                }
                
            
            }
            
            
            if(flag===true){
                
            console.log("Unique");
            
            }
            }
        validate2();
            
            
       /* var add =0;
        for (i=0;i<array1.length;i++)
        {
         add += array1[i];
      }
      alert(add);*/

    }
    

     
       