let objImage= null;
	function init(){
		objImage=document.getElementById("image");				
		objImage.style.position='relative';
		objImage.style.left='0px';
		objImage.style.top='0px';
        // objImage.style.top='473px';
        
	}
	function getKeyAndMove(e){				
		var key_code=e.keyCode;
		switch(key_code){
			case 37: //left arrow key
				moveLeft();
				break;
			case 38: //Up arrow key
				moveUp();
				break;
			case 39: //right arrow key
				moveRight();
				break;
			case 40: //down arrow key
				moveDown();
				break;						
		}
	}
	function moveLeft(){
		objImage.style.left=parseInt(objImage.style.left)-5 +'px';
        if(parseInt(objImage.style.left)<0){
            objImage.style.left="0px";
        }
	}
	function moveUp(){
		objImage.style.top=parseInt(objImage.style.top)-5 +'px';
        if(parseInt(objImage.style.top)<0){
            objImage.style.top="0px";
        }
	}
	function moveRight(){
		objImage.style.left=parseInt(objImage.style.left)+5 +'px';
        // if(parseInt(objImage.style.top)>){

        // }
	}
	function moveDown(){
		objImage.style.top=parseInt(objImage.style.top)+5 +'px';
	}
	window.onload=init;