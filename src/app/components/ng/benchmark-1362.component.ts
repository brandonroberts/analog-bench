
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1362',
    template: `<div class="benchmark-component">
    <h3>Component 1362</h3>
    <button type="button" (click)="increment1362()">
      Count {{ count1362() }}
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
  export class BenchmarkNg1362 {
    count1362 = signal(0);

    increment1362() {
      this.count1362.update((count) => count + 1);
    }
  }