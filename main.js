function startClassification()
{
    document.getElementById("buttonFunction").value;
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier.classify(gotResult);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear -'+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuray -'+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("results_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";

        img = document.getElementById('alien1');
        img1 = document.getElementById('alien2');
        img2 = document.getElementById('alien3');
        img3 = document.getElementById('alien4');

        if (result[0].label == "Clap") {
            img.src = 'aliens-01.gif';
        }
    }
}

