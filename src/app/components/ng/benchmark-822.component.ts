
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-822',
    template: `<div class="benchmark-component">
    <h3>Component 822</h3>
    <button type="button" (click)="increment822()">
      Count {{ count822() }}
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
  export class BenchmarkNg822 {
    count822 = signal(0);

    increment822() {
      this.count822.update((count) => count + 1);
    }
  }