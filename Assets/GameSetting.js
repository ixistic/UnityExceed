#pragma strict
//GameSetting.js
var topWall : BoxCollider2D;
var bottomWall : BoxCollider2D;
var leftWall : BoxCollider2D;
var rightWall : BoxCollider2D;
var mainCamera : Camera;
var mikeStyle : GUISkin;
static var scoreP1 : int = 0;
static var scoreP2 : int = 0;

function Start () {
	topWall.size = new Vector2(GenVector2(Screen.width*2,0f).x,1f);
	topWall.center = new Vector2(0f,GenVector2(0f,Screen.height).y + 0.5f);
	
	bottomWall.size = new Vector2(GenVector2(Screen.width*2,0f).x,1f);
	bottomWall.center = new Vector2(0f,GenVector2(0f,0f).y - 0.5f);
	
	leftWall.size = new Vector2(1f,GenVector2(0f,Screen.height*2).y);
	leftWall.center = new Vector2(GenVector2(0f,0f).x -0.5f,0f);
	
	rightWall.size = new Vector2(1f,GenVector2(0f,Screen.height*2).y);
	rightWall.center = new Vector2(GenVector2(Screen.width,0f).x +0.5f,0f);
}

function GenVector2(x,y){
	return mainCamera.ScreenToWorldPoint(new Vector3(x,y,0));
}

function OnGUI() {
	GUI.skin = mikeStyle;
	GUI.Label(new Rect( Screen.width/2 - 150 - 20, 20, 100, 100 ),scoreP1+"");
	GUI.Label(new Rect( Screen.width/2 + 150 - 20, 20, 100, 100 ),scoreP2+"");
}
	
	
	
	
	
	
	
	
	


