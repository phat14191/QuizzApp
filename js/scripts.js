$(document).ready(function() {

  var acor = 0;
  var qnum = 0;


//Start
  $('#startbutton').click(function(event) {
  	$("#question1,#correctcounter").removeClass("hidden");
  	$('#introduction').addClass("hidden");
  	$('#numbercorrect').html(acor);
  	$('#questionnumber').html(qnum);
  });


  //Events for question 1
  $('#q1submit').click(function(event) {
  	qnum += 1;
  	$('#questionnumber').html(qnum);
  	if ($('input[name="q1"]:checked').val() == 'correct') {
  		$('#correctindicator').removeClass("hidden");
  		$('#q1submit').addClass("hidden");
      acor += 1;
  		$('#cont1').removeClass("hidden");
  		$('#numbercorrect').html(acor);
  		event.preventDefault();
  	}
  	else if ($('input[name="q1"]:checked').val() == 'incorrect') {
  		$('#incorrectindicator').removeClass("hidden");
  		$('#q1submit').addClass("hidden");
  		$('#cont1').removeClass("hidden");
  		event.preventDefault();
  	}
  	else if (!$('input[name="q1"]:checked').val()) {
  	}
  });

  $('#cont1').click(function(event) {
  	event.preventDefault();
  	$("#question2,#q1submit").removeClass("hidden");
  	$('#question1,#cont1,#correctindicator,#incorrectindicator').addClass("hidden");

  });


  //Events for question 2
  $('#q2submit').click(function(event) {
  	qnum += 1;
  	$('#questionnumber').html(qnum);
  	if ($('input[name="q2"]:checked').val() == 'correct') {
  		$('#correctindicator').removeClass("hidden");
  		$('#cont2').removeClass("hidden");
  		$('#q2submit').addClass("hidden");
  		acor += 1;
  		$('#numbercorrect').html(acor);
  		event.preventDefault();
  	}
  	else if ($('input[name="q2"]:checked').val() == 'incorrect') {
  		$('#incorrectindicator').removeClass("hidden");
  		$('#cont2').removeClass("hidden");
  		$('#q2submit').addClass("hidden");
  		event.preventDefault();
  	}
  	else if (!$('input[name="q2"]:checked').val()) {
  	}
  });

  $('#cont2').click(function(event) {
  	event.preventDefault();
  	$("#question3,#q2submit").removeClass("hidden");
  	$('#question2,#cont2,#correctindicator,#incorrectindicator').addClass("hidden");
  });


  //Events for question 3
  $('#q3submit').click(function(event) {
  	qnum += 1;
  	$('#questionnumber').html(qnum);
  	if ($('input[name="q3"]:checked').val() == 'correct') {
  		$('#correctindicator').removeClass("hidden");
  		$('#cont3').removeClass("hidden");
  		$('#q3submit').addClass("hidden");
  		acor += 1;
  		$('#numbercorrect').html(acor);
  		event.preventDefault();
  	}
  	else if ($('input[name="q3"]:checked').val() == 'incorrect') {
  		$('#incorrectindicator').removeClass("hidden");
  		$('#cont3').removeClass("hidden");
  		$('#q3submit').addClass("hidden");
  		event.preventDefault();
  	}
  	else if (!$('input[name="q3"]:checked').val()) {
  	}
  });

  $('#cont3').click(function(event) {
  	event.preventDefault();
  	$("#question4,#q3submit").removeClass("hidden");
  	$('#question3,#cont3,#correctindicator,#incorrectindicator').addClass("hidden");
  });

  //Events for question 4
  $('#q4submit').click(function(event) {
  	qnum += 1;
  	$('#questionnumber').html(qnum);
  	if ($('input[name="q4"]:checked').val() == 'correct') {
  		$('#correctindicator').removeClass("hidden");
  		$('#cont4').removeClass("hidden");
  		$('#q4submit').addClass("hidden");
  		acor += 1;
  		$('#numbercorrect').html(acor);
  		event.preventDefault();
  	}
  	else if ($('input[name="q4"]:checked').val() == 'incorrect') {
  		$('#incorrectindicator').removeClass("hidden");
  		$('#cont4').removeClass("hidden");
  		$('#q4submit').addClass("hidden");
  		event.preventDefault();
  	}
  	else if (!$('input[name="q4"]:checked').val()) {
  	}
  });

  $('#cont4').click(function(event) {
  	event.preventDefault();
  	$("#question5,#q4submit").removeClass("hidden");
  	$('#question4,#cont4,#correctindicator,#incorrectindicator').addClass("hidden");
  });


  //Events for question 5
  $('#q5submit').click(function(event) {
  	qnum += 1;
  	$('#questionnumber').html(qnum);
  	if ($('input[name="q5"]:checked').val() == 'correct') {
  		$('#correctindicator').removeClass("hidden");
  		$('#cont5').removeClass("hidden");
  		$('#q5submit').addClass("hidden");
  		acor += 1;
  		$('#numbercorrect').html(acor);
  		event.preventDefault();
  	}
  	else if ($('input[name="q5"]:checked').val() == 'incorrect') {
  		$('#incorrectindicator').removeClass("hidden");
  		$('#cont5').removeClass("hidden");
  		$('#q5submit').addClass("hidden");
  		event.preventDefault();
  	}
  	else if (!$('input[name="q5"]:checked').val()) {
  	}
  });

  $('#cont5').click(function(event) {
  	event.preventDefault();
  	$("#question5,#q5submit,#finalp,#laststartover").removeClass("hidden");
  	$('#question5,#cont5,#correctindicator,#incorrectindicator,#correctcounter').addClass("hidden");
  	$('#finalcount').html(acor);
  });

  $('.startover').click(function(event) {
  	window.location.reload();
  });
});
