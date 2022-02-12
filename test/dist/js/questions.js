let test = [
    {
        eng: [
            {
                questions: [
                    {
                        question: "english ?",
                        answer: "Random Access Memory",
                        options: [
                            "Random Access Memory",
                            "Randomely Access Memory",
                            "Run Aceapt Memory",
                            "None of these"
                        ]
                    },
                    {
                        question: "What is the full form of CPU?",
                        answer: "Central Processing Unit",
                        options: [
                            "Central Program Unit",
                            "Central Processing Unit",
                            "Central Preload Unit",
                            "None of these"
                        ]
                    },
                    {
                        question: "What is the full form of E-mail",
                        answer: "Electronic Mail",
                        options: [
                            "Electronic Mail",
                            "Electric Mail",
                            "Engine Mail",
                            "None of these"
                        ]
                    }
                ]
            }
        ],
        geo: [
            {
                questions: [
                    {
                        question: "geography",
                        answer: "Random Access Memory",
                        options: [
                            "Random Access Memory",
                            "Randomely Access Memory",
                            "Run Aceapt Memory",
                            "None of these"
                        ]
                    }
                ]
            }
        ],
        his: [
            {
                questions: [
                    {
                        question: "history",
                        answer: "Random Access Memory",
                        options: [
                            "Random Access Memory",
                            "Randomely Access Memory",
                            "Run Aceapt Memory",
                            "None of these"
                        ]
                    }
                ]
            }
        ],
        mar: [
            {
                questions: [
                    {
                        question: "marathi",
                        answer: "Random Access Memory",
                        options: [
                            "Random Access Memory",
                            "Randomely Access Memory",
                            "Run Aceapt Memory",
                            "None of these"
                        ]
                    }
                ]
            }
        ],
        math: [
            {
                questions: [
                    {
                        question: "maths",
                        answer: "Random Access Memory",
                        options: [
                            "Random Access Memory",
                            "Randomely Access Memory",
                            "Run Aceapt Memory",
                            "None of these"
                        ]
                    }
                ]
            }
        ],
        sci: [
            {
                questions: [
                    {
                        question: "science",
                        answer: "Random Access Memory",
                        options: [
                            "Random Access Memory",
                            "Randomely Access Memory",
                            "Run Aceapt Memory",
                            "None of these"
                        ]
                    }
                ]
            }
        ],
        // next subject here by putting comma to upper end

    },
    {
        
    }
    // hsc here by putting comma to upper end
];

let sub = sessionStorage.getItem('subjectselected');
let cls = sessionStorage.getItem('studyclass');

console.log(sub, cls);

let question_count = 0;
let points = 0;

window.onload = function () {
    show(question_count);
};


// function next() {
//     // if the question is last then redirect to final page
//     if (question_count == test[0].eng[0].questions.length - 1) {
//         sessionStorage.setItem("time", time);
//         clearInterval(mytime);
//         location.href = "end.html";
//     }
//     console.log(question_count);

//     let user_answer = document.querySelector("li.option.active").innerHTML;
//     // check if the answer is right or wrong
//     if (user_answer == test[0].eng[0].questions[question_count].answer) {
//         points += 10;
//         sessionStorage.setItem("points", points);
//     }
//     console.log(points);

//     question_count++;
//     show(question_count);
// }

// function show(count) {
//     let question = document.getElementById("questions");
//     let [first, second, third, fourth] = test[0].eng[0].questions[count].options;

//     question.innerHTML = `
//   <h2>Q${count + 1}. ${test[0].eng[0].questions[count].question}</h2>
//    <ul class="option_group">
//   <li class="option">${first}</li>
//   <li class="option">${second}</li>
//   <li class="option">${third}</li>
//   <li class="option">${fourth}</li>
// </ul> 
//   `;
//     toggleActive();
// }

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
}


if (cls == 'ssc') {                       //ssc
    if (sub == 'eng') {
        function next() {
            // if the question is last then redirect to final page
            if (question_count == test[0].eng[0].questions.length - 1) {
                sessionStorage.setItem("time", time);
                clearInterval(mytime);
                location.href = "end.html";
            }
            console.log(question_count);

            let user_answer = document.querySelector("li.option.active").innerHTML;
            // check if the answer is right or wrong
            if (user_answer == test[0].eng[0].questions[question_count].answer) {
                points += 10;
                sessionStorage.setItem("points", points);
            }
            console.log(points);

            question_count++;
            show(question_count);
        }

        function show(count) {
            let question = document.getElementById("questions");
            let [first, second, third, fourth] = test[0].eng[0].questions[count].options;

            question.innerHTML = `
  <h2>Q${count + 1}. ${test[0].eng[0].questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
            toggleActive();
        }

    }
    else if (sub=='geo'){
        function next() {
            // if the question is last then redirect to final page
            if (question_count == test[0].geo[0].questions.length - 1) {
                sessionStorage.setItem("time", time);
                clearInterval(mytime);
                location.href = "end.html";
            }
            console.log(question_count);

            let user_answer = document.querySelector("li.option.active").innerHTML;
            // check if the answer is right or wrong
            if (user_answer == test[0].geo[0].questions[question_count].answer) {
                points += 10;
                sessionStorage.setItem("points", points);
            }
            console.log(points);

            question_count++;
            show(question_count);
        }

        function show(count) {
            let question = document.getElementById("questions");
            let [first, second, third, fourth] = test[0].geo[0].questions[count].options;

            question.innerHTML = `
  <h2>Q${count + 1}. ${test[0].geo[0].questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
            toggleActive();
        }
    }
    else if (sub=='his'){
        function next() {
            // if the question is last then redirect to final page
            if (question_count == test[0].his[0].questions.length - 1) {
                sessionStorage.setItem("time", time);
                clearInterval(mytime);
                location.href = "end.html";
            }
            console.log(question_count);

            let user_answer = document.querySelector("li.option.active").innerHTML;
            // check if the answer is right or wrong
            if (user_answer == test[0].his[0].questions[question_count].answer) {
                points += 10;
                sessionStorage.setItem("points", points);
            }
            console.log(points);

            question_count++;
            show(question_count);
        }

        function show(count) {
            let question = document.getElementById("questions");
            let [first, second, third, fourth] = test[0].his[0].questions[count].options;

            question.innerHTML = `
  <h2>Q${count + 1}. ${test[0].his[0].questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
            toggleActive();
        }
    }
    else if (sub=='mar'){
        function next() {
            // if the question is last then redirect to final page
            if (question_count == test[0].mar[0].questions.length - 1) {
                sessionStorage.setItem("time", time);
                clearInterval(mytime);
                location.href = "end.html";
            }
            console.log(question_count);

            let user_answer = document.querySelector("li.option.active").innerHTML;
            // check if the answer is right or wrong
            if (user_answer == test[0].mar[0].questions[question_count].answer) {
                points += 10;
                sessionStorage.setItem("points", points);
            }
            console.log(points);

            question_count++;
            show(question_count);
        }

        function show(count) {
            let question = document.getElementById("questions");
            let [first, second, third, fourth] = test[0].mar[0].questions[count].options;

            question.innerHTML = `
  <h2>Q${count + 1}. ${test[0].mar[0].questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
            toggleActive();
        }
    }
    else if (sub=='math'){
        function next() {
            // if the question is last then redirect to final page
            if (question_count == test[0].math[0].questions.length - 1) {
                sessionStorage.setItem("time", time);
                clearInterval(mytime);
                location.href = "end.html";
            }
            console.log(question_count);

            let user_answer = document.querySelector("li.option.active").innerHTML;
            // check if the answer is right or wrong
            if (user_answer == test[0].math[0].questions[question_count].answer) {
                points += 10;
                sessionStorage.setItem("points", points);
            }
            console.log(points);

            question_count++;
            show(question_count);
        }

        function show(count) {
            let question = document.getElementById("questions");
            let [first, second, third, fourth] = test[0].math[0].questions[count].options;

            question.innerHTML = `
  <h2>Q${count + 1}. ${test[0].math[0].questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
            toggleActive();
        }
    }
    else if (sub=='sci'){
        function next() {
            // if the question is last then redirect to final page
            if (question_count == test[0].sci[0].questions.length - 1) {
                sessionStorage.setItem("time", time);
                clearInterval(mytime);
                location.href = "end.html";
            }
            console.log(question_count);

            let user_answer = document.querySelector("li.option.active").innerHTML;
            // check if the answer is right or wrong
            if (user_answer == test[0].sci[0].questions[question_count].answer) {
                points += 10;
                sessionStorage.setItem("points", points);
            }
            console.log(points);

            question_count++;
            show(question_count);
        }

        function show(count) {
            let question = document.getElementById("questions");
            let [first, second, third, fourth] = test[0].sci[0].questions[count].options;

            question.innerHTML = `
  <h2>Q${count + 1}. ${test[0].sci[0].questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
            toggleActive();
        }
    }
    
}
else{                                //hsc
    if(sub=='bio'){

    }
    else if (sub=='chem'){
        
    }
    else if (sub=='cs'){

    }
    else if (sub=='el'){

    }
    else if (sub=='fish'){

    }
    else if (sub=='math'){

    }
    else if (sub=='phy'){

    }
}