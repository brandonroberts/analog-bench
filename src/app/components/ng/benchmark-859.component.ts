
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-859',
    template: `<div class="benchmark-component">
    <h3>Component 859</h3>
    <button type="button" (click)="increment859()">
      Count {{ count859() }}
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
  export class BenchmarkNg859 {
    count859 = signal(0);

    increment859() {
      this.count859.update((count) => count + 1);
    }
  }