
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-362',
    template: `<div class="benchmark-component">
    <h3>Component 362</h3>
    <button type="button" (click)="increment362()">
      Count {{ count362() }}
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
  export class BenchmarkNg362 {
    count362 = signal(0);

    increment362() {
      this.count362.update((count) => count + 1);
    }
  }