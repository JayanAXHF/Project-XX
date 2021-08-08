function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    // image(video, 0, 0, 600, 500);

    background("#3DFFE1");
    textSize(difference);
    fill("#000000");

    text('Ghost', 50, 400);


}


function modelLoaded() {

}

var difference = 0;


function gotPoses(results) {

    if (results.length > 0) {
        console.log("file: main.js ~ line 28 ~ gotPoses ~ if ~ results", results)


        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;



        difference = floor(leftwristX - rightwristX);
    }
}