function getData(){

    window.scrollTo(0, 0); // Skrollar till toppen av sidan

    let allInputs = document.getElementsByTagName('input'); // Variabel för alla 'input'-element

    // Lägger till 'disabled'-attributen till alla 'input'-element
    for (let x of allInputs){        
        x.setAttribute('disabled', '')  
    }                                   

    // Fråga 1
    question('question_1', "Bad Romance"); // question(namn, correct_answer)

    // Fråga 2
    question('question_2', "Cutting Crew");

    // Fråga 3
    question('question_3', "Dumma mig 2");
    
    // Fråga 4
    question('question_4', "Run Away");

    // Fråga 5
    question('question_5', "Nicki Minaj");

    // Fråga 6
    question('question_6', "Alternativ 2");

    // Fråga 7
    question('question_7', "Alternativ 2");
}

function question(name, correct_answer){

    // Variabel för alternativen i fråga 1
    var alternativ = document.getElementsByName(name);

    // Går igenom alla alternativ
    for (var i = 0; i < alternativ.length; i++){

        // Om ditt valda svar är korrekt ... , annars ...
        if (alternativ[i].checked == true && alternativ[i].value == correct_answer){

            // Adderar klassen "correct" till närmsta 'fieldset'.
            alternativ[i].closest("fieldset").setAttribute("class", "correct")

            break;
        
        } else if (alternativ[i].checked == true && alternativ[i].value != correct_answer){

            // Adderar klassen "incorrect" till närmsta 'fieldset'.
            alternativ[i].closest("fieldset").setAttribute("class", "incorrect")

            // Går genom alla alternativ
            for (var j = 0; j < alternativ.length; j++){
            
                // Det korrekta alternativet
                if (alternativ[j].value == correct_answer){
            
                    // Adderar klassen "correct" till närmsta 'p'
                    alternativ[j].closest("p").setAttribute("class", "the_correct")
            
                    break;
                }
            }
        }
    }
}