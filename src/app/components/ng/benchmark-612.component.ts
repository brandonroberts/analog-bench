
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-612',
    template: `<div class="benchmark-component">
    <h3>Component 612</h3>
    <button type="button" (click)="increment612()">
      Count {{ count612() }}
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
  export class BenchmarkNg612 {
    count612 = signal(0);

    increment612() {
      this.count612.update((count) => count + 1);
    }
  }