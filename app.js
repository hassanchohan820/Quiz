

//QUESTION 1

function Q1check(){
  var marks = document.getElementById("marksQ1");
  var right_ans_1  = document.getElementById("q1-a2");
  var q1_ans2 = document.getElementById("q1-a1");
  var q1_ans3 = document.getElementById("q1-a3");
  var q1_ans4 = document.getElementById("q1-a4");
  if (right_ans_1.checked == true){
    alert("Q1: Correct answer.");
    marks.innerHTML = 1
  }
  else if (q1_ans2.checked == true || q1_ans3.checked == true || q1_ans4.checked == true ){
    alert("Wrong answer!");
  }
  else{
    alert(" Please select an option! ");
  }


}

//QUESTION 2

function Q2check(){
  var marks = document.getElementById("marksQ2");
  var right_ans_2  = document.getElementById("q2-a2");
  var q2_ans1 = document.getElementById("q2-a1");
  var q2_ans3 = document.getElementById("q2-a3");
  var q2_ans4 = document.getElementById("q2-a4");
  if (right_ans_2.checked == true){
    alert("Q2: Correct answer.");
    marks.innerHTML = 1
  }
  else if (q2_ans1.checked == true || q2_ans3.checked == true || q2_ans4.checked == true ){
    alert("Wrong answer!");
  }
  else{
    alert(" Please select an option! ");
  }
}


//QUESTION 3

function Q3check(){
  var marks = document.getElementById("marksQ3");
  var right_ans_3  = document.getElementById("q3-a3");
  var q3_ans1 = document.getElementById("q3-a1");
  var q3_ans2 = document.getElementById("q3-a2");
  var q3_ans4 = document.getElementById("q3-a4");
  if (right_ans_3.checked == true){
    alert("Q3: Correct answer.");
    marks.innerHTML = 1
  }
  else if (q3_ans1.checked == true || q3_ans2.checked == true || q3_ans4.checked == true ){
    alert("Wrong answer!");
  }
  else{
    alert(" Please select an option!");
  }
}

//QUESTION 4

function Q4check(){
  var marks = document.getElementById("marksQ4");
  var right_ans_4  = document.getElementById("q4-a1");
  var q4_ans2 = document.getElementById("q4-a2");
  var q4_ans3 = document.getElementById("q4-a3");
  var q4_ans4 = document.getElementById("q4-a4");
  if (right_ans_4.checked == true){
    alert("Q3: Correct answer.");
    marks.innerHTML = 1
  }
  else if (q4_ans2.checked == true || q4_ans3.checked == true || q4_ans4.checked == true ){
    alert("Wrong answer!");
  }
  else{
    alert(" Please select an option!");
  }
}