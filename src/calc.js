function calc(operand1, operand2, operation) {
    let result = 0;
    switch (operation) {
        case '+':
            result = +operand1 + +operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
        case '**':
            result = Math.pow(operand1, operand2);
            break;
        case 'sqrt':
                result = Math.sqrt(operand1);
                break;
        default:
            break;
    };
    console.log(result);
};
