let questions = document.querySelectorAll(".faq-question");

questions.forEach(function(question) {

  question.addEventListener("click", function() {

    let answer = question.nextElementSibling;
    let plus = question.querySelector(".plus");

    if(answer.style.display === "block"){
      answer.style.display = "none";
      plus.innerText = "+";
    }
    else{
      answer.style.display = "block";
      plus.innerText = "×";
    }

  });

});