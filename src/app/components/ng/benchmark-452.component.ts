
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-452',
    template: `<div class="benchmark-component">
    <h3>Component 452</h3>
    <button type="button" (click)="increment452()">
      Count {{ count452() }}
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
  export class BenchmarkNg452 {
    count452 = signal(0);

    increment452() {
      this.count452.update((count) => count + 1);
    }
  }