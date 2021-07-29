const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball1, ball2, g1, g2, g3, g4, g5, g6;

function setup(){
    var canvas = createCanvas(900,600);
    engine = Engine.create();
    world = engine.world;



    g1 = new Ground(100,280,200);
    
    g2 = new Ground(200,320,120);

    g3 = new Ground(300,360,40);

    g4 = new Ground(600,360,40);

    g5 = new Ground(700,320,120);

    g6 = new Ground(800,280,200);

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,1000,20,ground_options);
    World.add(world,ground);

    ball1 = new Ball(150);

    ball2 = new Ball(750);
    
    console.log(ground);
}

function draw(){
    background("white");
    Engine.update(engine);
    g1.display();
    g2.display();
    g3.display();
    g4.display();
    g5.display();
    g6.display();
    fill("black");
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1500,20);

    ball1.display();
    ball2.display();
}