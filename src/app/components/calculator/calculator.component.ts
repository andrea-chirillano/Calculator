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
    const partes = operation.split(',');
  
    const ultimaParte = partes[partes.length - 1].trim();
  
    const ultimoNumero = parseInt(ultimaParte, 10);
  
    const ultimoNumeroFloat = parseFloat(ultimaParte);
  
    if (!isNaN(ultimoNumero) && Number.isInteger(ultimoNumero) && !isNaN(ultimoNumeroFloat) && !Number.isInteger(ultimoNumeroFloat)) {
      return operation + ',';
    }
  
    return operation;
  }

  remove(operation: string): string {
    return "";
  }

  removeOneDigit(operation: string): string {
    return operation.slice(0, -1)
  }

  result(operation: string): string {
    if (operation == "") {
      return operation
    }
    try {
      const resultValue = eval(operation);

      if (typeof resultValue === 'number') {
        return resultValue.toString();
      } else {
        throw new Error('La expresión no es válida');
      }
    } catch (error) {
      return 'Error en la expresión';
    }
  }
  
}