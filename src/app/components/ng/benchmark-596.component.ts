
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-596',
    template: `<div class="benchmark-component">
    <h3>Component 596</h3>
    <button type="button" (click)="increment596()">
      Count {{ count596() }}
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
  export class BenchmarkNg596 {
    count596 = signal(0);

    increment596() {
      this.count596.update((count) => count + 1);
    }
  }