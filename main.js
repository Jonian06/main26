nose_x=0;
nose_y=0;

function preload(){
moustache=loadImage("moustache.png")
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose', gotposes);
}

function modelloaded(){
console.log('posenet is initialized');
}

function gotposes(results){
if(results.length>0)
{
console.log(results);
nosex=+results[0].pose.nose.x;
nosey=+results[0].pose.nose.y;
console.log("nosex=",+nosex);
console.log("nosey=",+nosey);
}
}

function draw(){
image(video,0,0,300,300);
image(moustache,nose_x,nose_y,30,30);
}
    
function take_snapshot(){
save('myfilter.png');
}