
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1265',
    template: `<div class="benchmark-component">
    <h3>Component 1265</h3>
    <button type="button" (click)="increment1265()">
      Count {{ count1265() }}
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
  export class BenchmarkNg1265 {
    count1265 = signal(0);

    increment1265() {
      this.count1265.update((count) => count + 1);
    }
  }