
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1323',
    template: `<div class="benchmark-component">
    <h3>Component 1323</h3>
    <button type="button" (click)="increment1323()">
      Count {{ count1323() }}
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
  export class BenchmarkNg1323 {
    count1323 = signal(0);

    increment1323() {
      this.count1323.update((count) => count + 1);
    }
  }