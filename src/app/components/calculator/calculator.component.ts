import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  currentOperation: string = '';

  handleOperatorClick(operator: string): void {
    switch (operator) {
      case '+':
        this.currentOperation = this.add(this.currentOperation);
        break;
      case '-':
        this.currentOperation = this.subtract(this.currentOperation);
        break;
      case '*':
        this.currentOperation = this.multiply(this.currentOperation);
        break;
      case '/':
        this.currentOperation = this.divide(this.currentOperation);
        break;
      case '0':
        this.currentOperation = this.addDigitZero(this.currentOperation);
        break;
      case '1':
        this.currentOperation = this.addDigitOne(this.currentOperation);
        break;
      case '2':
        this.currentOperation = this.addDigitTwo(this.currentOperation);
        break;
      case '3':
        this.currentOperation = this.addDigitThree(this.currentOperation);
        break;
      case '4':
        this.currentOperation = this.addDigitFour(this.currentOperation);
        break;
      case '5':
        this.currentOperation = this.addDigitFive(this.currentOperation);
        break;
      case '6':
        this.currentOperation = this.addDigitSix(this.currentOperation);
        break;
      case '7':
        this.currentOperation = this.addDigitSeven(this.currentOperation);
        break;
      case '8':
        this.currentOperation = this.addDigitEight(this.currentOperation);
        break;
      case '9':
        this.currentOperation = this.addDigitNine(this.currentOperation);
        break;
      case ',':
        this.currentOperation = this.addComma(this.currentOperation);
        break;
      case '(':
        this.currentOperation = this.addOpenBracket(this.currentOperation);
        break;
      case ')':
        this.currentOperation = this.addCloseBracket(this.currentOperation);
        break;
      case '🛇':
        this.currentOperation = this.remove(this.currentOperation);
        break;
      case '⌫':
        this.currentOperation = this.removeOneDigit(this.currentOperation);
        break;
      case '=':
        this.currentOperation = this.result(this.currentOperation);
        break;
      case 'log':
        this.currentOperation = this.logarithm(this.currentOperation);
        break;
      case 'ln':
        this.currentOperation = this.naturalLogarithm(this.currentOperation);
        break;
      case '√x':
        this.currentOperation = this.squareRoot(this.currentOperation);
        break;
      case 'x^':
        this.currentOperation = this.power(this.currentOperation);
        break;
      case 'π':
        this.currentOperation = this.pi(this.currentOperation);
        break;
    }
  }

  add(operation: string): string {
    // Check if the last character is not one of the specified operators
    const lastChar = operation.charAt(operation.length - 1);
    if (!['+', '-', '*', '/', '^', ''].includes(lastChar)) {
      return operation + '+';
    } else {
      return operation;
    }
  }

  subtract(operation: string): string {
    // Check if the last character is not one of the specified operators
    const lastChar = operation.charAt(operation.length - 1);
    if (!['+', '-', '*', '/', '^', ''].includes(lastChar)) {
      return operation + '-';
    } else {
      return operation;
    }
  }

  multiply(operation: string): string {
    // Check if the last character is not one of the specified operators
    const lastChar = operation.charAt(operation.length - 1);
    if (!['+', '-', '*', '/', '^', ''].includes(lastChar)) {
      return operation + '*';
    } else {
      return operation;
    }
  }

  divide(operation: string): string {
    // Check if the last character is not one of the specified operators
    const lastChar = operation.charAt(operation.length - 1);
    if (!['+', '-', '*', '/', '^', ''].includes(lastChar)) {
      return operation + '/';
    } else {
      return operation;
    }
  }

  logarithm(operation: string): string {
    // Find the last digit in the string
    const lastDigit = operation.match(/\d+$/);
  
    // Check if the last figure was found
    if (lastDigit) {
      // Convert the last figure to a number
      const num = parseFloat(lastDigit[0]);
  
      // Check if the conversion was successful and if the number is greater than 0
      if (!isNaN(num) && num > 0) {
        // Calculate the base 10 logarithm of the last figure
        const result = Math.log10(num);
        // Replaces the last digit in the original string with the result of the logarithm
        return operation.replace(/\d+$/, result.toString());
      }
    }
  
    return "ERROR";
  }

  naturalLogarithm(operation: string): string {
    // Find the last digit in the string
    const lastDigit = operation.match(/\d+$/);
  
    // Check if the last figure was found
    if (lastDigit) {
      // Convert the last figure to a number
      const num = parseFloat(lastDigit[0]);
  
      // Check if the conversion was successful and if the number is greater than 0
      if (!isNaN(num) && num > 0) {
        // Calculate the natural logarithm of the last figure
        const result = Math.log(num);
        // Replaces the last digit in the original string with the result of the logarithm
        return operation.replace(/\d+$/, result.toString());
      }
    }
  
    return "ERROR";
  }

  squareRoot(operation: string): string {

    // Find the last digit in the string
    const lastDigit = operation.match(/\d+$/);
  
    // Check if the last figure was found
    if (lastDigit) {
      // Convert the last figure to a number
      const num = parseFloat(lastDigit[0]);
  
      // Check if the conversion was successful and if the number is greater than 0
      if (!isNaN(num) && num > 0) {
        // Calculate the base 10 logarithm of the last figure
        const result = Math.sqrt(num);
        // Replaces the last digit in the original string with the result of the logarithm
        return operation.replace(/\d+$/, result.toString());
      }
    }

    return "ERROR";
  }

  power(operation: string): string {
    const lastChar = operation.charAt(operation.length - 1);
  
    // Check if the last character is one of the specified characters
    if (['+', '-', '*', '/', '^', ''].includes(lastChar)) {
      return "ERROR";
    } else {
      return operation + "^";
    }
  }

  pi(operation: string): string {
    const lastChar = operation.charAt(operation.length - 1);
  
    // Check if the last character is one of the specified characters
    if (['+', '-', '*', '/', '^', ')', '('].includes(lastChar)) {
      return operation + "3.1415926535897932384626433832795";
    } else {
      return "3.1415926535897932384626433832795";
    }
  }

  addDigitZero(operation: string): string {
    return operation + "0";
  }

  addDigitOne(operation: string): string {
    return operation + "1";
  }

  addDigitTwo(operation: string): string {
    return operation + "2";
  }

  addDigitThree(operation: string): string {
    return operation + "3";
  }

  addDigitFour(operation: string): string {
    return operation + "4";
  }

  addDigitFive(operation: string): string {
    return operation + "5";
  }

  addDigitSix(operation: string): string {
    return operation + "6";
  }

  addDigitSeven(operation: string): string {
    return operation + "7";
  }

  addDigitEight(operation: string): string {
    return operation + "8";
  }

  addDigitNine(operation: string): string {
    return operation + "9";
  }

  addOpenBracket(operation: string): string{
    return operation + "("
  }

  addCloseBracket(operation: string): string{
    return operation + ")"
  }

  addComma(operation: string): string {
    // Check if string contains only one integer
    if (/^\d+$/.test(operation)) {
      return operation + ",";
    }
  
    // Find the last mathematical operator in the string
    const lastOperatorIndex = Math.max(
      operation.lastIndexOf("+"),
      operation.lastIndexOf("-"),
      operation.lastIndexOf("*"),
      operation.lastIndexOf("/")
    );
  
    if (lastOperatorIndex !== -1) {
      // Check if after the last operator there is an integer without power
      const lastPart = operation.slice(lastOperatorIndex + 1);
      if (/^\d+$/.test(lastPart) && !lastPart.includes("^")) {
        return operation + ",";
      }
    }
  
    return operation;
  }

  remove(operation: string): string {
    return "";
  }

  removeOneDigit(operation: string): string {
    return operation.slice(0, -1)
  }

  keyEnterResult() {
    this.currentOperation = this.result(this.currentOperation);
  }

  result(operation: string): string {
    // Check if string is empty
    if (operation === "") {
      return operation;
    }
  
    // Replace powers in string using a regular expression
    operation = operation.replace(/(\d+)\^(\d+)/g, (_, base, exponent) => {
      // Calculate power and convert it to string
      return Math.pow(parseFloat(base), parseFloat(exponent)).toString();
    });
  
    try {
      // Evaluate the mathematical operation
      const resultValue = eval(operation);
  
      if (typeof resultValue === 'number') {
        return resultValue.toString(); 
      } else {
        throw new Error('ERROR');
      }
    } catch (error) {
      return 'ERROR';
    }
  }
  
  
}