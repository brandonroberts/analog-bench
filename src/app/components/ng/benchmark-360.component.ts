
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-360',
    template: `<div class="benchmark-component">
    <h3>Component 360</h3>
    <button type="button" (click)="increment360()">
      Count {{ count360() }}
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
  export class BenchmarkNg360 {
    count360 = signal(0);

    increment360() {
      this.count360.update((count) => count + 1);
    }
  }