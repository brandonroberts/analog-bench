
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-835',
    template: `<div class="benchmark-component">
    <h3>Component 835</h3>
    <button type="button" (click)="increment835()">
      Count {{ count835() }}
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
  export class BenchmarkNg835 {
    count835 = signal(0);

    increment835() {
      this.count835.update((count) => count + 1);
    }
  }