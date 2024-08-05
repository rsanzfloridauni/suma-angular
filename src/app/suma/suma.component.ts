import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suma',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './suma.component.html',
  styleUrl: './suma.component.css'
})
export class SumaComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calcularSuma(): void {
    this.resultado = this.numero1 + this.numero2;
  }
}
