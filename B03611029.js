function doFirst(){
	document.getElementById("switchpic").style.display = "none";
    document.getElementById('theForm').onsubmit = Temperature;
}

function Temperature(){	  
    var F = document.getElementById('F').value;
    var C = document.getElementById('C').value;
    var K = document.getElementById('K').value;
 
    if(F.length !=0) {
        C= (F-32)*5/9;
        K= C+273.15;
        C= C.toFixed(2);
        K= K.toFixed(2);
    }
    else if(C.length != 0){
        F= C*9/5+32;
        K= (F+459.67)*5/9
        F= F.toFixed(2);
        K= K.toFixed(2);
    }
    else{
    	C= K-273.15;   	
    	F= C*9/5+32;
    	C= C.toFixed(2)
    	F= F.toFixed(2);   	
    }
            
    document.getElementById('F').value = F;
    document.getElementById('C').value = C;
    document.getElementById('K').value = K;
     
    if(document.getElementById('C').value >= 25){
		document.getElementById("switchpic").src ="./hot.gif";
	}
	else if(document.getElementById('C').value >= 10 && document.getElementById('C').value < 25){
		document.getElementById("switchpic").src ="./smooth.gif";
	}
	else{
		document.getElementById("switchpic").src ="./cold.gif";
	}
  
    
    document.getElementById('mysubmit').disabled = true;
	document.getElementById('C').disabled = true;
	document.getElementById('F').disabled = true;
	document.getElementById('K').disabled = true;
	return false;
}
window.addEventListener('load',doFirst,false);

function ChangeDisabled(){
	document.getElementById('mysubmit').disabled = false;
	document.getElementById('C').disabled = false;
	document.getElementById('F').disabled = false;
	document.getElementById('K').disabled = false;
}

function Picture(){		
	document.getElementById("switchpic").style.display = "block";
}


