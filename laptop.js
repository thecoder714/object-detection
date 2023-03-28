var img = "";
objects = [];
var level = false;

function preload() {img = loadImage('laptop.webp');}

function setup() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
  
function modelLoaded() {
    console.log("Model Loaded!");
    level = true;
}
  
function gotResult(error, results) {
    if (error) {console.log(results);}
    console.log(results);
    objects = results;
}

function draw() {
    image(img, 0, 0, 380, 380);
        if (level = true) {
            r = random(255);
            g = random(255);
            b = random(255);
            objectDetector.detect(img, gotResult);
            //document.getElementById("status").innerHTML = "Status: Objects Detected";
            //document.getElementById("numberofobjects").innerHTML = objects.length;

            for (let i = 0; i <= objects.length; i++) {
                percent = floor(objects[i].confidence * 100);
                console.log("percent: " + percent);
                document.getElementById("object").innerHTML += objects[i].label +  ": " + percent + "%" + " ";
            }
            noLoop();
        }
}

setTimeout(function() {draw()}, 2000);