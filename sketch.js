const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var database;
var gameState = 0 ;
var playerCount;
var game;
var form;
var player;
var allPlayers;
var striker,invisibleSprite,chain;
var queenCoin;
var blackImg,whiteImg,strikerImg,boardImage,queenImg;
var paddle,paddle1;
var blackCoinsGroup,whiteCoinsGroup;
var wall1,wall2,wall3,wall4;
var hole1,hole2,hole3,hole4;
var score = 0;
var coinsGroup;
function preload(){
  blackImg = loadImage("images/black_coin_carrom_-removebg-preview.png")
  whiteImg = loadImage("images/white_coin-removebg-preview.png")
  strikerImg = loadImage("images/striker-removebg-preview.png")
  boardImage = loadImage("images/carrom_board-removebg-preview.png")
  queenImg = loadImage("images/queens_coin-removebg-preview.png")
}
function setup(){
  engine = Engine.create();
  world = engine.world;
  database = firebase.database();
  console.log(database);
  createCanvas(1200,700);
  coinsGroup = new Group();
  
  game = new Game()
  game.getState()
  game.start()
}

function draw(){
  
  if(playerCount === 2){
    game.update(1)
  }
  if(gameState === 1){
    clear()
    game.play()
  }
  if(gameState === 2){
    game.end()
  }
}
 function mouseDragged(){
   console.log("mouseDragged")
   Matter.Body.setPosition(paddle.body,{x:mouseX,y:mouseY})
   striker.x = mouseX
   striker.y = mouseY
 }
 function mouseReleased(){
   console.log("mouseReleased")
   chain.fly()
   if(paddle.body .position.x > 450 && paddle.body.position.x <500 &&
    paddle.body.position.y > 150 && paddle.body.position.y < 600){
   console.log("leftSide")
   striker.velocityY = 0
  striker.velocityX = paddle.body.velocity.x  
   }
   else if(paddle.body .position.x > 850 && paddle.body.position.x < 900 &&
    paddle.body.position.y > 150 && paddle.body.position.y < 600){
   console.log("rightSide")
   striker.velocityY = 0
  striker.velocityX = -paddle.body.velocity.x  
    }
    else if(paddle.body .position.x > 450 && paddle.body.position.x < 900 &&
      paddle.body.position.y > 150 && paddle.body.position.y < 200){
     console.log("topSide")
     striker.velocityY = paddle.body.velocity.y  
    striker.velocityX = 0
      }
      else if(paddle.body .position.x > 450 && paddle.body.position.x < 900 &&
        paddle.body.position.y > 550 && paddle.body.position.y < 600){
       console.log("bottomSide")
       striker.velocityY = -paddle.body.velocity.y  
       striker.velocityX = 0
        }
  Matter.Body.setStatic(paddle.body,true)
  console.log("striker y"+paddle.body.velocity.y)
  console.log("striker x"+paddle.body.velocity.x)
 }