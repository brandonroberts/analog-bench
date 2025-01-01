
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-570',
    template: `<div class="benchmark-component">
    <h3>Component 570</h3>
    <button type="button" (click)="increment570()">
      Count {{ count570() }}
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
  export class BenchmarkNg570 {
    count570 = signal(0);

    increment570() {
      this.count570.update((count) => count + 1);
    }
  }