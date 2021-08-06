//js function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log("🚀 ~ file: main.js ~ line 18 ~ gotPoses ~ if ~ results", results)
    }
}
