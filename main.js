noseX = 0;
noseY = 0;
LeftWristX = 0;
RightWristX = 0;
difference = 0;


function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("The model  is loaded as usual so dont worry");
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        noseY = results[0].pose.nose.y;
        difference = LeftWristX - RightWristX;
    }
}

function draw(){
    background(0);
    fill('white');
    textSize(difference);
    text("Meenakshi", noseX, noseY);

}