
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-135',
    template: `<div class="benchmark-component">
    <h3>Component 135</h3>
    <button type="button" (click)="increment135()">
      Count {{ count135() }}
    </button>
  </div>`,
  styles: `
  .benchmark-component {
    padding: 1rem;
    border: 1px solid #ccc;
    margin: 0.5rem;
    border-radius: 4px;
  }
  `,
    standalone: true,
  })
  export class BenchmarkNg135 {
    count135 = signal(0);

    increment135() {
      this.count135.update((count) => count + 1);
    }
  }