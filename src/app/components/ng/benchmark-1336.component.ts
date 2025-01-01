
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1336',
    template: `<div class="benchmark-component">
    <h3>Component 1336</h3>
    <button type="button" (click)="increment1336()">
      Count {{ count1336() }}
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
  export class BenchmarkNg1336 {
    count1336 = signal(0);

    increment1336() {
      this.count1336.update((count) => count + 1);
    }
  }