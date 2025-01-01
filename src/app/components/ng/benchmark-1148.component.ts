
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1148',
    template: `<div class="benchmark-component">
    <h3>Component 1148</h3>
    <button type="button" (click)="increment1148()">
      Count {{ count1148() }}
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
  export class BenchmarkNg1148 {
    count1148 = signal(0);

    increment1148() {
      this.count1148.update((count) => count + 1);
    }
  }