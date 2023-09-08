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
    if (/[+*/-][0-9]+\.[0-9]+/.test(value)) {
      return false;
    }

    if (/([+*/-])\1+/.test(value)) {
      return false;
    }

    if (/,+/.test(value)) {
      return false;
    }

    if (/^,|,$/.test(value)) {
      return false;
    }

    return true;
  }

  private removeInvalidChars(value: string): string {

    value = value.replace(/([+*/-])\1+/g, '$1');

    value = value.replace(/,+/g, ',');

    value = value.replace(/[^0-9,+*/-]/g, '');

    value = value.replace(/(\d)(?=(?:\d{3})+(?!\d))(?![\.,])/g, '$1,');

    return value;
  }
}
