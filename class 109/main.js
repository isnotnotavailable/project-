function startClassification()
{
    navigator.mediaDevices.getUserMedia({aduio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JutYKAsF1/',ModelReady)
}

function modleready(){
    classifier.classify(gotReasults);
}

function gotResults(error, reasults) {
    if (error){
        console.error(error);
    }
     else {
         console.log(reasults);
         random_numbers_r = Math.floor(Math.random() * 225) + 1;
         random_numbers_g = Math.floor(Math.random() * 225) + 1;
         random_numbers_b = Math.floor(Math.random() * 225) + 1;

         document.getElementById("result_label").innerHTML = 'I can hear -'+results[0].label;
         document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (result[0].confidence*100).toFixed(2)+"%";
         document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
         document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

         
     }
}