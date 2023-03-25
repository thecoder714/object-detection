var img = "";
objects = [];
var level = false;

function preload() {img = loadImage('laptop.jpg');}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }
  
function modelLoaded() {
    console.log("Model Loaded!")
    level = true;
}
  
function gotResult(error, results) {
    if (error) {console.log(results);}
    console.log(results);
    objects = results;
}

function draw() {
    image(video, 0, 0, 380, 380);
        if (level != false) {
            r = random(255);
            g = random(255);
            b = random(255);
            objectDetector.detect(video, gotResult);

            for (let i = 0; i < objects.length; i++) {
                document.getElementById("status").innerHTML = "Status: Objects Detected";
                document.getElementById("numberofobjects").innerHTML = objects.length;
                // fill(r, g, b);
                fill(0, 0, 0)
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
                // stroke(r, g, b);
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
        }
}

