window.onload =function(){
    Start();
}
//submit form
function submitform() {

    var name = document.getElementById("name").value;
    console.log(name);
    sessionStorage.setItem("name", name);
    location.href = "quiz.html";
  }
//timer
var ms = 0;
var m = 0;
var s = 0;
var min = document.getElementById("m")
var hour = document.getElementById("hr")
var sec = document.getElementById("s")
var interval;

function Start() {
  interval = setInterval(function milisec() {
    // ms++
    // millisec.innerHTML =ms;
    // if(ms>=100){
    s++
    ms = 0;
    sec.innerHTML = s;


    if (s >= 60) {
      m++
      s = 0;
      min.innerHTML = m;
    }
    else if (m >= 60) {
      h++
      m = 0;
      hour.innerHTML = h;
    }
  }, 1000)

}
function checked(){
    var score=0;
    var right_ans1=document.getElementById("q1-a1");
    var q1_ans2=document.getElementById("q1-a2")
    var q1_ans3=document.getElementById("q1-a3")
    if(right_ans1.checked ==true){
        score++
    }
    else{
        alert("Q1 is wrong");
    }
    var right_ans2=document.getElementById("q2-a2");
    var q2_ans2=document.getElementById("q2-a1")
    var q2_ans3=document.getElementById("q2-a3")
    if(right_ans2.checked ==true){
        score++
    }
    else{
        alert("Q2 is wrong");
    }
    var right_ans3=document.getElementById("q3-a3");
    var q3_ans2=document.getElementById("q3-a2")
    var q3_ans3=document.getElementById("q3-a1")
    if(right_ans3.checked ==true){
        score++
    }
    else{
        alert("Q3 is wrong");
    }
    var right_ans4=document.getElementById("q4-a3");
    var q4_ans2=document.getElementById("q4-a2")
    var q4_ans3=document.getElementById("q4-a1")
    if(right_ans4.checked ==true){
        score++
    }
    else{
        alert("Q4 is wrong");
    }
    var right_ans5=document.getElementById("q5-a1");
    var q5_ans2=document.getElementById("q5-a2")
    var q5_ans3=document.getElementById("q5-a3")
    if(right_ans5.checked ==true){
        score++
    }
    else{
        alert("Q5 is wrong");
    }
 alert("Your scores are: "+score)
 alert("thanks for your participation")
}  