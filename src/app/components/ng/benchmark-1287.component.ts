
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1287',
    template: `<div class="benchmark-component">
    <h3>Component 1287</h3>
    <button type="button" (click)="increment1287()">
      Count {{ count1287() }}
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
  export class BenchmarkNg1287 {
    count1287 = signal(0);

    increment1287() {
      this.count1287.update((count) => count + 1);
    }
  }