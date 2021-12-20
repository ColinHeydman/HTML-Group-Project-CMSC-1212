
/*
		Name: Colin Heydman

		File: trivia_quiz.js
*/

function resetQuiz() {
   document.quiz.quizclock.value = 0;
   for (i=0; i<document.quiz.elements.length; i++) document.quiz.elements[i].disabled=false;
   document.quiz.stop.disabled = true;
}

function showQuiz() {
   document.getElementById("quiztable").style.visibility="visible";
   document.quiz.start.disabled = true;
   document.quiz.stop.disabled = false;
}

function hideQuiz() {
   document.getElementById("quiztable").style.visibility="hidden";
}

function gradeQuiz() {
   correct=0;
   if (document.quiz.q1[1].checked) correct++;
   if (document.quiz.q2[0].checked) correct++;
   if (document.quiz.q3[2].checked) correct++;
   if (document.quiz.q4[2].checked) correct++;
   if (document.quiz.q5[1].checked) correct++;
   if (document.quiz.q6[3].checked) correct++;
	 if (document.quiz.q7[1].checked) correct++;
	 if (document.quiz.q8[3].checked) correct++;
	 if (document.quiz.q9[2].checked) correct++;
	 if (document.quiz.q10[1].checked) correct++;
	 
   document.getElementById("cor1").style.backgroundColor="yellow";
   document.getElementById("cor2").style.backgroundColor="yellow";
   document.getElementById("cor3").style.backgroundColor="yellow";
   document.getElementById("cor4").style.backgroundColor="yellow";
   document.getElementById("cor5").style.backgroundColor="yellow";
	 document.getElementById("cor6").style.backgroundColor="yellow";
	 document.getElementById("cor7").style.backgroundColor="yellow";
	 document.getElementById("cor8").style.backgroundColor="yellow";
	 document.getElementById("cor9").style.backgroundColor="yellow";
	 document.getElementById("cor10").style.backgroundColor="yellow";

   for (i=0; i<document.quiz.elements.length; i++) document.quiz.elements[i].disabled=true;

   return correct;
}

  