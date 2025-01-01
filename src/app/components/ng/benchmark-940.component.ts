
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-940',
    template: `<div class="benchmark-component">
    <h3>Component 940</h3>
    <button type="button" (click)="increment940()">
      Count {{ count940() }}
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
  export class BenchmarkNg940 {
    count940 = signal(0);

    increment940() {
      this.count940.update((count) => count + 1);
    }
  }