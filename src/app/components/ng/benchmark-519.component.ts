
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-519',
    template: `<div class="benchmark-component">
    <h3>Component 519</h3>
    <button type="button" (click)="increment519()">
      Count {{ count519() }}
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
  export class BenchmarkNg519 {
    count519 = signal(0);

    increment519() {
      this.count519.update((count) => count + 1);
    }
  }