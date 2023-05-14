function getData(){

    window.scrollTo(0, 0);

    var quizQuestion1 = document.getElementsByName('question_1'); // Variabel för alternativen i fråga 1

    let allInputs = document.getElementsByTagName('input');

    for (let x of allInputs){
        x.setAttribute('disabled', '')
    }

    for (var i = 0; i < quizQuestion1.length; i++){ // Går igenom alla alternativ
        if (quizQuestion1[i].checked){ // Tar reda på vilket alternativ som är valt

            if (quizQuestion1[i].value == "Bad_Romance"){ // Om svaret är korrekt svar
                quizQuestion1[i].closest("fieldset").setAttribute("class", "correct")
            } else{ // Om svaret är inkorrekt
                quizQuestion1[i].closest("fieldset").setAttribute("class", "incorrect")

                for (var j = 0; j < quizQuestion1.length; j++){
                    if (quizQuestion1[j].value == "Bad_Romance"){
                        quizQuestion1[j].closest("p").setAttribute("class", "correct")
                    }
                    break;
                }
            }

            break;
        }
    }
}