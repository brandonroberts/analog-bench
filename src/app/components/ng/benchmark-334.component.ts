
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-334',
    template: `<div class="benchmark-component">
    <h3>Component 334</h3>
    <button type="button" (click)="increment334()">
      Count {{ count334() }}
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
  export class BenchmarkNg334 {
    count334 = signal(0);

    increment334() {
      this.count334.update((count) => count + 1);
    }
  }