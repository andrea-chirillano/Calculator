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
      input.value = this.removeInvalidChars(value);
    }
  }

  private isValid(value: string): boolean {
    return /^[0-9]*([+*\/-][0-9]+)*(,?)[+*\/-]*$/.test(value);
  }

  private removeInvalidChars(value: string): string {
    return value.replace(/[^0-9+*\/-]|(?<=[0-9])(?![0-9+*\/-])|(?<=[+*\/-])(?![0-9])|(?<=[,])(?![0-9+*\/-])|(?<=[+*\/-])(?![+*\/-])|(?<=[,])(?![,])|(?<=[+*\/-])(?![,])/g, '');
  }
}
