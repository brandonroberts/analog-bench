
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-67',
    template: `<div class="benchmark-component">
    <h3>Component 67</h3>
    <button type="button" (click)="increment67()">
      Count {{ count67() }}
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
  export class BenchmarkNg67 {
    count67 = signal(0);

    increment67() {
      this.count67.update((count) => count + 1);
    }
  }