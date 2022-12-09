function operand(str) {
  if (
    (str >= "a" && str <= "z") ||
    (str >= "A" && str <= "Z") ||
    (str >= 0 && str <= 9)
  ) {
    return true;
  } else {
    return false;
  }
}

function operator(str) {
  if (str == "^") {
    return 3;
  }
  if (str == "/" || str == "*") {
    return 2;
  }
  if (str == "+" || str == "-") {
    return 1;
  } else {
    return 0;
  }
}

function postfixConversion(str) {
  let postfix = "";
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (operand(str[i])) {
      postfix += str[i];
    }
   else if (str[i] == "(") {
      stack.push(str[i]);
    }
  else  if (str[i] == ")") {
        while (stack[stack.length - 1] != "(") {
            postfix += stack[stack.length - 1];
            stack.pop();
      }
      stack.pop();
    }
    else {
        while (stack.length != 0 && operator(str[i]) <= operator(stack[stack.length - 1])) {
            postfix += stack[stack.length - 1];
        stack.pop();
      }
      stack.push(str[i])
    }
  }

  while (stack.length != 0) {
    postfix += stack[stack.length - 1];
    stack.pop();
  }
  return postfix;
}

console.log(postfixConversion("A*(B^C)+D-(W*H)+D+P"));
