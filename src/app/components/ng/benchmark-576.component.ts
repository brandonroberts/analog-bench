
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-576',
    template: `<div class="benchmark-component">
    <h3>Component 576</h3>
    <button type="button" (click)="increment576()">
      Count {{ count576() }}
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
  export class BenchmarkNg576 {
    count576 = signal(0);

    increment576() {
      this.count576.update((count) => count + 1);
    }
  }