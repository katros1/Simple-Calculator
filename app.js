const one = document.getElementById("one");
const operations = document.getElementById("operations");
const answer = document.getElementById("answer");
const operand1 = [];
let result;

function allocate(number) {
  display(number);
  operands(number);
}

function display(number) {
  operations.value += number;
}

function operands(number) {
  operand1.push(number);
  result = Number(operand1.join(""));
  console.log(result);
}
function clearAll() {
  operations.value = "";
  answer.value = "";
}

function deleteLast() {
  operations.value = operations.value.slice(0, -1);
}

function operate(operator) {
  if (operator === "-") {
    display(operator);
  } else if (operator === "+") {
    display(operator);
  } else if (operator === "X") {
    display(operator);
  } else if (operator === "*") {
    display(operator);
  } else if (operator === "/") {
    display(operator);
  }
}

function negation() {
  operations.value = operations.value * (-1);
}

function calculate() {
  expression = operations.value.replace(/\s/g, '');
  answer.value = helper(Array.from(expression), 0);
}


function helper(s, idx) {
  var stk = [];
  let sign = '+';
  let num = 0;
  for (let i = idx; i < s.length; i++) {
    let c = s[i];
    if (c >= '0' && c <= '9') {
      num = num * 10 + (c - '0');
    }
    if (!(c >= '0' && c <= '9') || i===s.length-1) {
      if (c==='(') {
        num = helper(s, i+1);
        let l = 1, r = 0;
        for (let j = i+1; j < s.length; j++) {
          if (s[j]===')') {
            r++;
            if (r===l) {
              i=j; break;
            }
          }
          else if (s[j]==='(') l++;
        }
      }
      let pre = -1;
      switch (sign) {
        case '+':
          stk.push(num);
          break;
        case '-':
          stk.push(num*-1);
          break;
        case '*':
          pre = stk.pop();
          stk.push(pre*num);
          break;
        case '/':
          pre = stk.pop();
          stk.push(pre/num);
          break;
      }
      sign = c;
      num = 0;
      if (c===')') break;
    }
  }
  let ans = 0;
  while (stk.length > 0) {
    ans += stk.pop();
  }
  return ans;
}