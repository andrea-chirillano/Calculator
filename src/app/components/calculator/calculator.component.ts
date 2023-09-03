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
      case '🛇':
        this.currentOperation = this.remove(this.currentOperation);
        break;
      case '«':
        this.currentOperation = this.removeOneDigit(this.currentOperation);
        break;
      case '=':
        this.currentOperation = this.result(this.currentOperation);
        break;
    }
  }

  add(operation: string): string {
    const lastChar = operation.slice(-1);
    if (/[0-9]/.test(lastChar)) {
      return operation + "+";
    } else {
      return operation;
    }
  }

  subtract(operation: string): string {
    const lastChar = operation.slice(-1);
    if (/[0-9]/.test(lastChar)) {
      return operation + "-";
    } else {
      return operation;
    }
  }

  multiply(operation: string): string {
    const lastChar = operation.slice(-1);
    if (/[0-9]/.test(lastChar)) {
      return operation + "*";
    } else {
      return operation;
    }
  }

  divide(operation: string): string {
    const lastChar = operation.slice(-1);
    if (/[0-9]/.test(lastChar)) {
      return operation + "/";
    } else {
      return operation;
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

  addComma(operation: string): string {
  const pattern = /^[0-9+\-*/]+$/;
  const lastChar = operation.charAt(operation.length - 1);

  if (pattern.test(operation) && /\d/.test(lastChar)) {
    return operation + ",";
  } else {
    return operation;
  }
}

  remove(operation: string): string {
    return "";
  }

  removeOneDigit(operation: string): string {
    return operation.slice(0, -1)
  }

  result(operation: string): string {
    try {
      // Utiliza eval para evaluar la expresión matemática
      const resultValue = eval(operation);
  
      // Verifica si el resultado es un número
      if (typeof resultValue === 'number') {
        // Convierte el resultado a cadena y devuélvelo
        return resultValue.toString();
      } else {
        throw new Error('La expresión no es válida');
      }
    } catch (error) {
      // Si hay un error al evaluar la expresión, maneja el error y devuelve un mensaje de error
      return 'Error en la expresión';
    }
  }
  
}