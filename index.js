const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased(){
  return tutorials.map((tutorials) => {
    const unit_str = tutorials.split(' ');

    const whole_str_cap = unit_str.map((unit_str) => {
      const whole_str_cap =
        unit_str.charAt(0).toUpperCase() + unit_str.slice(1);
      return whole_str_cap;
    });
    const x = whole_str_cap.join(' ');
    return x;
  });
}
