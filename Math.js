function myFunction(){
  var i = document.getElementById("topics").selectedIndex;
  if(i === 0){
    document.getElementById("commonTopics").style.display = "block";
    document.getElementById("alg1").style.display = "block";
    document.getElementById("geo").style.display = "block";
    document.getElementById("alg2").style.display = "block";
    document.getElementById("trig").style.display = "block";
    document.getElementById("precalc").style.display = "block";
    document.getElementById("stats").style.display = "block";
  } else if (i === 1){
    document.getElementById("commonTopics").style.display = "none";
    document.getElementById("alg1").style.display = "block";
    document.getElementById("geo").style.display = "none";
    document.getElementById("alg2").style.display = "none";
    document.getElementById("trig").style.display = "none";
    document.getElementById("precalc").style.display = "none";
    document.getElementById("stats").style.display = "none";
  } else if (i === 2){
    document.getElementById("commonTopics").style.display = "none";
    document.getElementById("alg1").style.display = "none";
    document.getElementById("geo").style.display = "block";
    document.getElementById("alg2").style.display = "none";
    document.getElementById("trig").style.display = "none";
    document.getElementById("precalc").style.display = "none";
    document.getElementById("stats").style.display = "none";
  } else if (i === 3){
    document.getElementById("commonTopics").style.display = "none";
    document.getElementById("alg1").style.display = "none";
    document.getElementById("geo").style.display = "none";
    document.getElementById("alg2").style.display = "block";
    document.getElementById("trig").style.display = "none";
    document.getElementById("precalc").style.display = "none";
    document.getElementById("stats").style.display = "none";
  } else if (i === 4) {
    document.getElementById("commonTopics").style.display = "none";
    document.getElementById("alg1").style.display = "none";
    document.getElementById("geo").style.display = "none";
    document.getElementById("alg2").style.display = "none";
    document.getElementById("trig").style.display = "block";
    document.getElementById("precalc").style.display = "none";
    document.getElementById("stats").style.display = "none";
  } else if (i === 5){
    document.getElementById("commonTopics").style.display = "none";
    document.getElementById("alg1").style.display = "none";
    document.getElementById("geo").style.display = "none";
    document.getElementById("alg2").style.display = "none";
    document.getElementById("trig").style.display = "none";
    document.getElementById("precalc").style.display = "block";
    document.getElementById("stats").style.display = "none";
  } else if (i === 6) {
    document.getElementById("commonTopics").style.display = "none";
    document.getElementById("alg1").style.display = "none";
    document.getElementById("geo").style.display = "none";
    document.getElementById("alg2").style.display = "none";
    document.getElementById("trig").style.display = "none";
    document.getElementById("precalc").style.display = "none";
    document.getElementById("stats").style.display = "block";
  }
}