
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-805',
    template: `<div class="benchmark-component">
    <h3>Component 805</h3>
    <button type="button" (click)="increment805()">
      Count {{ count805() }}
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
  export class BenchmarkNg805 {
    count805 = signal(0);

    increment805() {
      this.count805.update((count) => count + 1);
    }
  }