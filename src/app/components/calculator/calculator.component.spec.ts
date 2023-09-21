import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent]
    });
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add two numbers correctly', () => {
    const result = component.add("2+3");
    expect(result).toEqual("5");
  });

  it('should subtract two numbers correctly', () => {
    const result = component.subtract("5-3");
    expect(result).toEqual("2");
  });

  it('should multiply two numbers correctly', () => {
    const result = component.multiply("2*3");
    expect(result).toEqual("6");
  });

  it('should divide two numbers correctly', () => {
    const result = component.divide("6/2");
    expect(result).toEqual("3");
  });

  it('should calculate the base 10 logarithm correctly', () => {
    const result = component.logarithm("10");
    expect(result).toEqual("3.321928094887362");
  });

  it('should calculate the natural logarithm correctly', () => {
    const result = component.naturalLogarithm("2");
    expect(result).toEqual("0.6931471805599453");
  });

  it('should calculate the square root correctly', () => {
    const result = component.squareRoot("9");
    expect(result).toEqual("3");
  });

  it('should add a power symbol correctly', () => {
    const result = component.power("2^3");
    expect(result).toEqual("8");
  });

  it('should add the value of pi correctly', () => {
    const result = component.pi("π");
    expect(result).toEqual("3.1415926535897932384626433832795");
  });

  it('should add a comma to the value correctly', () => {
    const result = component.addComma("2");
    expect(result).toEqual("2,");
  });

  it('should add the value of result correctly', () => {
    const result = component.result("(2^3)*(1+1)");
    expect(result).toEqual("8");
  });

});
