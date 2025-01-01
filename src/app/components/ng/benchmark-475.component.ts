
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-475',
    template: `<div class="benchmark-component">
    <h3>Component 475</h3>
    <button type="button" (click)="increment475()">
      Count {{ count475() }}
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
  export class BenchmarkNg475 {
    count475 = signal(0);

    increment475() {
      this.count475.update((count) => count + 1);
    }
  }