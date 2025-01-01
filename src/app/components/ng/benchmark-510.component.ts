
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-510',
    template: `<div class="benchmark-component">
    <h3>Component 510</h3>
    <button type="button" (click)="increment510()">
      Count {{ count510() }}
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
  export class BenchmarkNg510 {
    count510 = signal(0);

    increment510() {
      this.count510.update((count) => count + 1);
    }
  }