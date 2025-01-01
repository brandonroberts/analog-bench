
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-560',
    template: `<div class="benchmark-component">
    <h3>Component 560</h3>
    <button type="button" (click)="increment560()">
      Count {{ count560() }}
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
  export class BenchmarkNg560 {
    count560 = signal(0);

    increment560() {
      this.count560.update((count) => count + 1);
    }
  }