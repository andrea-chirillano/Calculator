import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNumericOperatorInput]'
})
export class NumericOperatorInputDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    if (!this.isValid(value)) {
      // Elimina los caracteres no válidos
      input.value = this.removeInvalidChars(value);
    }
  }

  private isValid(value: string): boolean {
    // Verifica si se cumple la condición de que un operador debe preceder a un dígito
    return /^[0-9]*([+*\/-][0-9]+)*(,?)[+*\/-]*$/.test(value);
  }

  private removeInvalidChars(value: string): string {
    // Elimina los caracteres no válidos excepto números, comas y operadores matemáticos
    return value.replace(/[^0-9+*\/-]|(?<=[0-9])(?![0-9+*\/-])|(?<=[+*\/-])(?![0-9])|(?<=[,])(?![0-9+*\/-])|(?<=[+*\/-])(?![+*\/-])|(?<=[,])(?![,])|(?<=[+*\/-])(?![,])/g, '');
  }
}
