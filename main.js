Webcam.set({
    width:350,
     height:300,
     image_format:'png',
     png_quality:90
});
 
var camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    })
}
console.log('ml5.version',ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pN-0PVcCc/model.json',modelLoaded);

function modelLoaded(){
    console.log("modelLoaded")
}

function check() {
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);

}
function gotResult(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name_two").innerHTML=results[1].label;
        if(results[0].label=="happy"){
            document.getElementById("result_emoji_name").innerHTML="&#128512";
        }
        if(results[0].label=="angry"){
            document.getElementById("result_emoji_name").innerHTML="&#128545";
        }
        if(results[0].label=="annoyed"){
            document.getElementById("result_emoji_name").innerHTML="&#128548";
        }
        if(results[0].label=="good"){
            document.getElementById("result_emoji_name").innerHTML="&#128522";
        }
        if(results[0].label=="crying"){
            document.getElementById("result_emoji_name").innerHTML="&#128546";
        }
        if(results[0].label=="sad"){
            document.getElementById("result_emoji_name").innerHTML="&#128532";
        }
        

        if(results[1].label=="happy"){
            document.getElementById("result_emoji_name_two").innerHTML="&#128512";
        }
        if(results[1].label=="angry"){
            document.getElementById("result_emoji_name_two").innerHTML="&#128545";
        }
        if(results[1].label=="annoyed"){
            document.getElementById("result_emoji_name_two").innerHTML="&#128548";
        }
        if(results[1].label=="good"){
            document.getElementById("result_emoji_name_two").innerHTML="&#128522";
        }
        if(results[1].label=="crying"){
            document.getElementById("result_emoji_name_two").innerHTML="&#128546";
        }
        if(results[1].label=="sad"){
            document.getElementById("result_emoji_name_two").innerHTML="&#128532";
        }
    }
    }