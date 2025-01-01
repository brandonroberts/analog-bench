
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1359',
    template: `<div class="benchmark-component">
    <h3>Component 1359</h3>
    <button type="button" (click)="increment1359()">
      Count {{ count1359() }}
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
  export class BenchmarkNg1359 {
    count1359 = signal(0);

    increment1359() {
      this.count1359.update((count) => count + 1);
    }
  }