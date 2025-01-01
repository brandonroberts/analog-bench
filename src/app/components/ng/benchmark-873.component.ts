
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-873',
    template: `<div class="benchmark-component">
    <h3>Component 873</h3>
    <button type="button" (click)="increment873()">
      Count {{ count873() }}
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
  export class BenchmarkNg873 {
    count873 = signal(0);

    increment873() {
      this.count873.update((count) => count + 1);
    }
  }