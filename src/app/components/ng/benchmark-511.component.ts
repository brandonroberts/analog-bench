
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-511',
    template: `<div class="benchmark-component">
    <h3>Component 511</h3>
    <button type="button" (click)="increment511()">
      Count {{ count511() }}
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
  export class BenchmarkNg511 {
    count511 = signal(0);

    increment511() {
      this.count511.update((count) => count + 1);
    }
  }