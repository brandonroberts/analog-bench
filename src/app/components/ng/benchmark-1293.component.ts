
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1293',
    template: `<div class="benchmark-component">
    <h3>Component 1293</h3>
    <button type="button" (click)="increment1293()">
      Count {{ count1293() }}
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
  export class BenchmarkNg1293 {
    count1293 = signal(0);

    increment1293() {
      this.count1293.update((count) => count + 1);
    }
  }