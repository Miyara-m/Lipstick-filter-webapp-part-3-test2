var noseX = "";
var noseY = "";
function preload()
{
  lipstick_mouth = loadImage('https://i.postimg.cc/vH0rrp7c/kiss-clipart-red-lips-background-transparent-png-2969250.png');
}
function setup(){
canvas = createCanvas(300,310);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(lipstick_mouth, noseX - 10, noseY + 10, 30, 30);
}
function takeSnaphot()
{
save('LipstickPhoto.png');
}
function modelLoaded()
{
    console.log('PoseNest Is Initialized');
}
function gotPoses(results)
{ 
if (results.length > 0) 
{
    console.log(results);
    noseX = results[0].pose.nose.x;
    console.log("mouth x = " + noseX);
    noseY = results[0].pose.nose.y;
    console.log("mouth y = " + noseY);
}
}