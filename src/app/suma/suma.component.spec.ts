import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SumaComponent } from './suma.component';

describe('SumaComponent', () => {
  let component: SumaComponent;
  let fixture: ComponentFixture<SumaComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SumaComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(SumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('debe crear', () => {
    expect(component).toBeTruthy();
  });
  it('sdebe sumar correctamente', () => {
    component.numero1 = 5;
    component.numero2 = 10;
    component.calcularSuma();
    expect(component.resultado).toBe(15);
  });
  it('debe actualizar el resultado en la plantilla HTML', () => {
    component.numero1 = 3;
    component.numero2 = 7;
    component.calcularSuma();
    fixture.detectChanges(); // Trigger change detection
    const compiled = fixture.nativeElement;
    const resultParagraph = compiled.querySelector('p');
    expect(resultParagraph.textContent).toContain('Resultado: 10');
  });
});
