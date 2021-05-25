noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
canvas=createCanvas(400, 370);
canvas.position(700,150);
video=createCapture(VIDEO);
video.size(550,500);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet is initiated");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = "+noseX+" and nose y = "+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("left wrist is "+leftWristX+" right wrist is "+rightWristX+" difference is "+difference);
    }
}
function draw(){
    background('black');
    fill('red');
    textSize(difference);
    text('Ansha',50,250,);
    document.getElementById("square_side").innerHTML="the font size of Ansha = "+difference+" pixels";
}