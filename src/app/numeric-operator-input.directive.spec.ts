import { NumericOperatorInputDirective } from './numeric-operator-input.directive';
import { ElementRef } from '@angular/core';

describe('NumericOperatorInputDirective', () => {
  it('should create an instance', () => {
    const elementRefMock = {
      nativeElement: document.createElement('input')
    } as ElementRef;

    const directive = new NumericOperatorInputDirective(elementRefMock);
    
    expect(directive).toBeTruthy();
  });
});





