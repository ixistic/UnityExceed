#pragma strict

var speed : float = 5;

function Start () {
	var random = Random.Range(0f,1f);
	Debug.Log(random);
	if( random >= 0.5 ){
		rigidbody2D.velocity.x = speed;
	}	
	else{
		rigidbody2D.velocity.x = -speed;
	}
}

function Update () {
	
}

function OnCollisionEnter2D( colinfo : Collision2D ){
	Debug.Log(colinfo.gameObject.name);
	if(colinfo.gameObject.name == "RightWall"){
		GameSetting.scoreP1 += 1;
		ResetBall();
	}
	else if(colinfo.gameObject.name == "LeftWall"){
		GameSetting.scoreP2 += 1;
		ResetBall();
	}
}

function ResetBall(){
	rigidbody2D.velocity.x = 0;
	rigidbody2D.velocity.y = 0;
	transform.position.x = 0;
	transform.position.y = 2;
	yield WaitForSeconds(0.5);
	Start();
}







