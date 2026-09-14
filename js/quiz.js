// =====================================
// FOX & LORE BOOKS
// Folklore Personality Quiz Engine
// Connected to creatures.json
// =====================================

const quizConfig = {
    dataFile: "data/creatures.json"
};

const quizSettings = {

    title: "Are You a Kelpie, Banshee, Pooka, or Selkie?",
    subtitle: "Discover the folklore creature hidden within your soul...",
    description: "Every legend whispers of a creature waiting to be discovered. Are you mysterious like the Selkie, clever like the Pooka, powerful like the Banshee, or wild like the Kelpie?"
};


let creatureData = {};

let currentQuestion = 0;

let scores = {};


// =====================================
// QUESTIONS
// =====================================


const questions = [

    {
        question:
        "You discover a hidden door inside an ancient library. What draws you inside?",

        answers: [
            {
                text:
                "The sound of rushing water and a mysterious song beyond the door.",
                creature:"kelpie"
            },

            {
                text:
                "A whisper calling your name from the shadows.",
                creature:"banshee"
            },

            {
                text:
                "A strange glowing object that definitely wasn't there before.",
                creature:"pooka"
            },

            {
                text:
                "A forgotten journal filled with stories of another world.",
                creature:"selkie"
            }
        ]
    },


    {
        question:
        "Your greatest magical gift would be...",


        answers:[

            {
                text:"The ability to transform and adapt whenever needed.",
                creature:"kelpie"
            },

            {
                text:"Seeing hidden truths others cannot.",
                creature:"banshee"
            },

            {
                text:"Clever tricks, creativity, and a little mischief.",
                creature:"pooka"
            },

            {
                text:"Walking between two worlds while belonging to both.",
                creature:"selkie"
            }

        ]

    },


    {
        question:
        "Which place feels most like home?",


        answers:[

            {
                text:"A misty lake surrounded by ancient forests.",
                creature:"kelpie"
            },

            {
                text:"A moonlit tower filled with old family secrets.",
                creature:"banshee"
            },

            {
                text:"A cozy cottage where unexpected adventures happen.",
                creature:"pooka"
            },

            {
                text:"A quiet shore where the ocean meets the land.",
                creature:"selkie"
            }

        ]

    },


    {
        question:
        "What quality do you value most?",

        answers:[

            {
                text:"Strength and independence.",
                creature:"kelpie"
            },

            {
                text:"Wisdom and intuition.",
                creature:"banshee"
            },

            {
                text:"Creativity and curiosity.",
                creature:"pooka"
            },

            {
                text:"Compassion and freedom.",
                creature:"selkie"
            }

        ]

    },


    {
        question:
        "Your perfect adventure would be...",


        answers:[

            {
                text:"Exploring forgotten rivers and wild places.",
                creature:"kelpie"
            },

            {
                text:"Discovering ancient secrets buried in history.",
                creature:"banshee"
            },

            {
                text:"Following clues through a magical mystery.",
                creature:"pooka"
            },

            {
                text:"Traveling between worlds and meeting new souls.",
                creature:"selkie"
            }

        ]

    },

    {
question:
"When someone hurts someone you love, what do you do?",
answers:[

    {
        text:"Protect them fiercely, even if it means facing danger.",
        creature:"kelpie"
    },

    {
        text:"Remember everything. Some wrongs should never be forgotten.",
        creature:"banshee"
    },

    {
        text:"Find a clever way to turn the situation in your favor.",
        creature:"pooka"
    },

    {
        text:"Try to understand why they caused the hurt before deciding what to do.",
        creature:"selkie"
    }

]
},
{
question:
"Which magical object would you most want to discover?",
answers:[

    {
        text:"A silver bridle that lets you command the wild.",
        creature:"kelpie"
    },

    {
        text:"An ancient mirror that reveals hidden truths.",
        creature:"banshee"
    },

    {
        text:"A mysterious key that opens doors that shouldn't exist.",
        creature:"pooka"
    },

    {
        text:"A seal-skin cloak that allows you to cross between worlds.",
        creature:"selkie"
    }

]
},
{
question:
"What would tempt you most into a forbidden place?",
answers:[

    {
        text:"The promise of freedom and an untamed adventure.",
        creature:"kelpie"
    },

    {
        text:"A secret that has been hidden for generations.",
        creature:"banshee"
    },

    {
        text:"The possibility of finding something wonderfully strange.",
        creature:"pooka"
    },

    {
        text:"The chance to discover a world no one else has seen.",
        creature:"selkie"
    }

]
},
{
question:
"How would your friends describe you?",
answers:[

    {
        text:"Independent, strong-willed, and impossible to control.",
        creature:"kelpie"
    },

    {
        text:"Intuitive, observant, and able to sense what others miss.",
        creature:"banshee"
    },

    {
        text:"Playful, clever, unpredictable, and always up to something.",
        creature:"pooka"
    },

    {
        text:"Kind, mysterious, adaptable, and a little difficult to truly know.",
        creature:"selkie"
    }

]
},
{
question:
"You find a hidden path beneath the moonlight. Where does it lead?",
answers:[

    {
        text:"To a wild lake where something ancient waits beneath the water.",
        creature:"kelpie"
    },

    {
        text:"To a forgotten castle where the walls remember every secret.",
        creature:"banshee"
    },

    {
        text:"To an enchanted forest where nothing is quite what it seems.",
        creature:"pooka"
    },

    {
        text:"To a distant shore where another world waits beyond the waves.",
        creature:"selkie"
    }

]
}

];

// =====================================
// INITIALIZE SCORES
// =====================================

questions.forEach(question => {

    question.answers.forEach(answer => {

        scores[answer.creature] = 0;

    });

});

// =====================================
// LOAD CREATURE DATABASE
// =====================================


async function loadCreatures(){


    try {


        const response = await fetch(quizConfig.dataFile);


        const data = await response.json();


        creatureData = data.creatures;


        console.log("Creature lore loaded:", creatureData);



    }


    catch(error){


        console.error(
            "The ancient grimoire could not be opened:",
            error
        );


    }

}



// =====================================
// PAGE ELEMENTS
// =====================================


const startButton =
document.getElementById("startQuiz");


const quizSection =
document.getElementById("quiz");


const introSection =
document.querySelector(".quiz-intro");


const questionText =
document.getElementById("questionText");


const answersBox =
document.getElementById("answers");


const nextButton =
document.getElementById("nextQuestion");


const resultsSection =
document.getElementById("results");


const creatureResult =
document.getElementById("creatureResult");


const questionNumber =
document.getElementById("questionNumber");


const restartButton =
document.getElementById("restartQuiz");



// =====================================
// START QUIZ
// =====================================

startButton.onclick=function(){

    introSection.classList.add("hidden");

    quizSection.classList.remove("hidden");

    currentQuestion=0;

scores={};

questions.forEach(question => {

    question.answers.forEach(answer => {

        scores[answer.creature] = 0;

    });

});

    showQuestion();

};


// =====================================
// DISPLAY QUESTIONS
// =====================================


function showQuestion(){
nextButton.classList.add("hidden");

window.selectedAnswer = null;

const question =
questions[currentQuestion];

questionNumber.textContent =
`Question ${currentQuestion + 1} of ${questions.length}`;

questionText.textContent =
question.question;

answersBox.innerHTML = "";

question.answers.forEach(answer => {

    const button =
    document.createElement("button");

    button.className =
    "answer-button";

    button.textContent =
    answer.text;

    button.onclick = function(){

        // Remove the previous selection's score
        if(window.selectedAnswer){
            scores[window.selectedAnswer.creature]--;
        }

        // Remember the new selection
        window.selectedAnswer = answer;

        // Add the new selection's score
        scores[answer.creature]++;

        // Remove previous highlighting
        document
        .querySelectorAll(".answer-button")
        .forEach(btn => {

            btn.classList.remove("selected");
            btn.classList.remove("dimmed");

        });

        // Highlight the selected answer
        button.classList.add("selected");

        // Show Turn the Page
        nextButton.classList.remove("hidden");

    };

    answersBox.appendChild(button);

});
}



// =====================================
// NEXT PAGE
// =====================================


nextButton.onclick=function(){


    currentQuestion++;


    if(currentQuestion < questions.length){


        showQuestion();


    }

    else{


        revealCreature();


    }


};


// =====================================
// FOXFIRE EFFECT
// =====================================

function createFoxfire(){

    const card =
    document.querySelector(".result-card");

    if(!card) return;


    // Remove old foxfire
    card
    .querySelectorAll(".foxfire")
    .forEach(spark => spark.remove());


    // Create foxfire sparks
    for(let i = 0; i < 20; i++){

        const spark =
        document.createElement("span");

        spark.className = "foxfire";


        // Random size
        const randomSize = Math.random();

        if(randomSize < .3){

            spark.classList.add("small");

        }

        else if(randomSize > .75){

            spark.classList.add("large");

        }


        // Place sparks around different edges
        const side = Math.floor(Math.random() * 4);


        if(side === 0){

            // TOP
            spark.style.left =
            (5 + Math.random() * 90) + "%";

            spark.style.top =
            "-5px";

        }

        else if(side === 1){

            // RIGHT
            spark.style.right =
            "-5px";

            spark.style.top =
            (10 + Math.random() * 75) + "%";

        }

        else if(side === 2){

            // BOTTOM
            spark.style.left =
            (5 + Math.random() * 90) + "%";

            spark.style.bottom =
            "-5px";

        }

        else{

            // LEFT
            spark.style.left =
            "-5px";

            spark.style.top =
            (10 + Math.random() * 75) + "%";

        }


        // Random horizontal movement
        spark.style.setProperty(
            "--drift",
            (Math.random() * 100 - 50) + "px"
        );


        // Random starting delay
        spark.style.animationDelay =
        (Math.random() * 1.2) + "s";


        card.appendChild(spark);

    }

}

// =====================================
// REVEAL RESULT
// =====================================


function revealCreature(){

    quizSection.classList.add("hidden");

    resultsSection.classList.remove("hidden");

    resultsSection.classList.add("reveal-active");

    setTimeout(() => {

    createFoxfire();

}, 900);

    const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
);



    const result =
    creatureData[winner];



    creatureResult.innerHTML = `


        <h3>
       ${result.emoji}
${result.name}
        </h3>


       <h4>
    ${result.title}
</h4>


        <img 
        src="${result.image}"
        alt="${result.name}"
        style="
        width:250px;
        border-radius:15px;
        margin:20px auto;
        display:block;
        "
        >


        <p>
        ${result.resultMessage}
        </p>


        <p>
        <strong>
        Your strengths:
        </strong>
        <br>
        ${result.personalityTraits.join(", ")}
        </p>


        <blockquote>
       "${result.collectorCard.quote}"
        </blockquote>


    `;


}



// =====================================
// RESTART QUIZ
// =====================================


restartButton.onclick=function(){


    currentQuestion=0;


    scores={

        kelpie:0,
        banshee:0,
        pooka:0,
        selkie:0

    };

    resultsSection.classList.remove("reveal-active");

    resultsSection.classList.add("hidden");

    introSection.classList.remove("hidden");


};



// =====================================
// OPEN THE GRIMOIRE
// =====================================

document.getElementById("quizTitle").textContent =
    quizSettings.title;

    document.getElementById("quizSubtitle").textContent =
    quizSettings.subtitle;

    document.getElementById("quizDescription").textContent =
    quizSettings.description;

loadCreatures();