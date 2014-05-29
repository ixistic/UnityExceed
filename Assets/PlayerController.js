#pragma strict

var key_moveUp : KeyCode; //w
var key_moveDown : KeyCode; //s
var speed : float = 10;



function Update () {
	if ( Input.GetKey ( key_moveUp ) ){ //check w
		rigidbody2D.velocity.y = speed; //move up speed at Y
	}
	else if( Input.GetKey ( key_moveDown ) ){ //check s
		rigidbody2D.velocity.y = -speed; //move down
	}
	else{
		rigidbody2D.velocity.y = 0;
	}
}