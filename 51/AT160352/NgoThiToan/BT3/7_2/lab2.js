const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

 const geography = [
  {
    question: "Câu 1: Đâu không phải là một kiểu dữ liệu nguyên thủy trong Java?",
    answerA:
      "A. double",
    answerB:
      "B. int",
    answerC:
      "C. long",
    answerD:
      "D. long float",
  },
  {
    question: "Câu 2: Kích thước của 1 Char là bao nhiêu?",
    answerA:
      "A. 4 bit",
    answerB:
      "B. 7 bit",
    answerC:
      "C. 8 bit",
    answerD:
      "D. 16 bit",
  },
];


const history = [
  {
    question: "Câu 1: File chứa mã nguồn java sau khi được biên dịch có đuôi là gì?",
    answerA:
      "A. .java",
    answerB:
      "B. .class",
    answerC:
      "C. .jav",
    answerD:
      "D. .exe",
  },
  {
    question: "Câu 2: Java chạy trên hệ điều hành nào sau đây:",
    answerA:
      "A. Microsoft Windows",
    answerB:
      "B. Linux",
    answerC:
      "C. Sun Solaris OS",
    answerD:
      "D. Tất cả các đáp án đều đúng.",
  },
];

const render = (exams) => {
  const content = exams.map((exam, index) => { 
    return `
            <div class="question">${exam.question}</div>
            <div class="row">
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerA"></input>
                    <label for="answerA">${exam.answerA}</label>
                </div>
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerB"></input>
                    <label for="answerB">${exam.answerB}</label>
                </div>
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerC"></input>
                    <label for="answerC">${exam.answerC}</label>
                </div>
                <div class="col">
                    <input type="radio" name="answer + ${index}" id="answerD"></input>
                    <label for="answerD">${exam.answerD}</label>
                </div>
            </div>
            </div>
        `;
  });
  content.push('<button class="button">Submit</button>')
  $(".content").innerHTML = content.join("");
};

const handleExam = (examName) => {
    if(examName === 'dia') render(geography)
    if(examName === 'su') render(history)
};