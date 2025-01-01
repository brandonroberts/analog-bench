
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1310',
    template: `<div class="benchmark-component">
    <h3>Component 1310</h3>
    <button type="button" (click)="increment1310()">
      Count {{ count1310() }}
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
  export class BenchmarkNg1310 {
    count1310 = signal(0);

    increment1310() {
      this.count1310.update((count) => count + 1);
    }
  }