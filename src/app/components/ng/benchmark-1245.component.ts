
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1245',
    template: `<div class="benchmark-component">
    <h3>Component 1245</h3>
    <button type="button" (click)="increment1245()">
      Count {{ count1245() }}
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
  export class BenchmarkNg1245 {
    count1245 = signal(0);

    increment1245() {
      this.count1245.update((count) => count + 1);
    }
  }