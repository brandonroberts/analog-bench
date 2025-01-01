
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-522',
    template: `<div class="benchmark-component">
    <h3>Component 522</h3>
    <button type="button" (click)="increment522()">
      Count {{ count522() }}
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
  export class BenchmarkNg522 {
    count522 = signal(0);

    increment522() {
      this.count522.update((count) => count + 1);
    }
  }