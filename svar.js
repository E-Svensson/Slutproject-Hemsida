function getData(){

    window.scrollTo(0, 0); // Skrollar till toppen av sidan

    let allInputs = document.getElementsByTagName('input'); // Variabel för alla 'input'-element

    // Lägger till 'disabled'-attributen till alla 'input'-element
    for (let x of allInputs){        
        x.setAttribute('disabled', '')  
    }                                   

    // Fråga 1
    question('question_1', "Bad_Romance");

    question('question_2', "Cutting_Crew");
}

function question(name, correct_answer){

    // Variabel för alternativen i fråga 1
    var alternativ = document.getElementsByName(name);

    // Går igenom alla alternativ
    for (var i = 0; i < alternativ.length; i++){

        // Ditt valda alternativ
        if (alternativ[i].checked){

            // Om svaret är korrekt ... , annars ...
            if (alternativ[i].value == correct_answer){
                alternativ[i].closest("fieldset").setAttribute("class", "correct") // Adderar klassen "correct" till närmsta 'fieldset'.
            } else{
                alternativ[i].closest("fieldset").setAttribute("class", "incorrect") // Adderar klassen "incorrect" till närmsta 'fieldset'.

                // Går genom alla alternativ
                for (var j = 0; j < alternativ.length; j++){

                    // Det korrekta alternativet
                    if (alternativ[j].value == correct_answer){
                        alternativ[j].closest("p").setAttribute("class", "correct") // Adderar klassen "correct" till närmsta 'p'.
                        break;
                    }
                }
            }
            break;
        }
    }
}