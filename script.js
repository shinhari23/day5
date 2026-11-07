
const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Test Marks Language",
            "Home Tool Markup Language"
        ],
        answer: 0
    },
    {
        question: "Who is your favourite cartoon character?",
        options: [
            "Doraemon",
            "Oggy and the Cockroaches",
            "Pokemon Go",
            "Ninja Hattori"
        ],
        answer: 0
    },
    {
        question: "What is your favourite food?",
        options: [
            "Pav Bhaji",
            "Pizza",
            "Khichdi",
            "Gobi Manchurian"
        ],
        answer: 0
    },
    {
        question: "What is your favourite color?",
        options: [
            "Blue",
            "Pink",
            "Yellow",
            "Brown"
        ],
        answer: 0
    }
];

function displayQuestions() {
    quizcontainer.innerHTML = "";

    for (let i = 0; i < questions.length; i++) {

        const currentquestion = questions[i];

        const questionbox = document.createElement("div");
        questionbox.className = "question-box";

        const questionheading = document.createElement("h3");
        questionheading.textContent = currentquestion.question;

        questionbox.appendChild(questionheading);

        for (let j = 0; j < currentquestion.options.length; j++) {

            const label = document.createElement("label");
            label.className = "option";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "question" + i;
            radio.value = j;

            label.appendChild(radio);
            label.appendChild(
                document.createTextNode(currentquestion.options[j])
            );

            questionbox.appendChild(label);
            questionbox.appendChild(document.createElement("br"));
        }

        quizcontainer.appendChild(questionbox);
    }
}

// Get quiz container from HTML
const quizcontainer = document.getElementById("quiz-container");

// Display questions
displayQuestions();
