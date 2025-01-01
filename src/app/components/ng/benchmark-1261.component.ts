
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1261',
    template: `<div class="benchmark-component">
    <h3>Component 1261</h3>
    <button type="button" (click)="increment1261()">
      Count {{ count1261() }}
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
  export class BenchmarkNg1261 {
    count1261 = signal(0);

    increment1261() {
      this.count1261.update((count) => count + 1);
    }
  }