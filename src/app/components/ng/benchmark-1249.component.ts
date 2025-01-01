
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1249',
    template: `<div class="benchmark-component">
    <h3>Component 1249</h3>
    <button type="button" (click)="increment1249()">
      Count {{ count1249() }}
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
  export class BenchmarkNg1249 {
    count1249 = signal(0);

    increment1249() {
      this.count1249.update((count) => count + 1);
    }
  }