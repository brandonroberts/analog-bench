
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-530',
    template: `<div class="benchmark-component">
    <h3>Component 530</h3>
    <button type="button" (click)="increment530()">
      Count {{ count530() }}
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
  export class BenchmarkNg530 {
    count530 = signal(0);

    increment530() {
      this.count530.update((count) => count + 1);
    }
  }