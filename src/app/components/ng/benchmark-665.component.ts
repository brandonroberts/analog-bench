
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-665',
    template: `<div class="benchmark-component">
    <h3>Component 665</h3>
    <button type="button" (click)="increment665()">
      Count {{ count665() }}
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
  export class BenchmarkNg665 {
    count665 = signal(0);

    increment665() {
      this.count665.update((count) => count + 1);
    }
  }