
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-901',
    template: `<div class="benchmark-component">
    <h3>Component 901</h3>
    <button type="button" (click)="increment901()">
      Count {{ count901() }}
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
  export class BenchmarkNg901 {
    count901 = signal(0);

    increment901() {
      this.count901.update((count) => count + 1);
    }
  }