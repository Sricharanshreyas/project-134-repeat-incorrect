object=[];
status=false;
alarm=""
function preload(){
  alarm=loadSound("ringing_old_phone.mp3");
}
function setup(){
    canvas=createCanvas(500,500);
    canvas.position(400,100);
    video=createCapture(VIDEO);
    video.hide();
    cocoSSD=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status:Detecting objects";
}
function draw(){
    image(video,0,0,500,500);
    if(status==true){
    for(i=0;i<objects.length;i++){
        if(objects[i].label=="baby"&&objects[i].label=="person"){
            document.getElementById("baby").innerHTML="Baby found";
            alarm.stop();
        }
        else{
            document.getElementById("baby").innerHTML="Baby not found";
            alarm.play();
        }
    }
}

}
function modelloaded(){
    console.log("cocossd is loaded");
    status=true;
    cocoSSD.detect(video,gotresults);
  
}
function gotresults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
    objects=results;
  

}