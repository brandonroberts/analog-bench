
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1285',
    template: `<div class="benchmark-component">
    <h3>Component 1285</h3>
    <button type="button" (click)="increment1285()">
      Count {{ count1285() }}
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
  export class BenchmarkNg1285 {
    count1285 = signal(0);

    increment1285() {
      this.count1285.update((count) => count + 1);
    }
  }