top = -1;
const stack = [];
let rev = "";

function push(data) {
  top++;
  stack.push(data);
}

function pop() {
  // console.log(stack.pop());
  rev += stack.pop()
}

const str = "hello world opopop";
//console.log(str.length)

for (i = 0; i < str.length; i++) {
  if (str[i] === " ") {
    while (top > -1) {
      pop();
      top--;
    }
    rev += " ";
  } else {
    push(str[i]);
  }
}


if (top > -1) {
  while (top > -1) {
    pop();
    top--;
  }
}

console.log(rev);