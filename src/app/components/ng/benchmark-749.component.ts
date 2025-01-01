
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-749',
    template: `<div class="benchmark-component">
    <h3>Component 749</h3>
    <button type="button" (click)="increment749()">
      Count {{ count749() }}
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
  export class BenchmarkNg749 {
    count749 = signal(0);

    increment749() {
      this.count749.update((count) => count + 1);
    }
  }