Webcam.set({
    width: 400,
    height: 300,
    img_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera")

function take_snapshot() {

    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='selfie_image' src = '" + data_uri + "' >"
    }
    )
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/lzeNQeJsE/model.json", modelloaded);

function modelloaded() {
    console.log("Model Loaded!")
}

function check() {
    var img = document.getElementById("selfie_image");
    classifier.classify(img , gotResult);
}

function gotResult(error , result){
    if (error) {
        console.log(error)
    }

    else {
        console.log(result);
        document.getElementById("object_result").innerHTML = result[0].label;
        document.getElementById("Accuracy").innerHTML = result[0].confidence.toFixed(3);

    }
}