
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1301',
    template: `<div class="benchmark-component">
    <h3>Component 1301</h3>
    <button type="button" (click)="increment1301()">
      Count {{ count1301() }}
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
  export class BenchmarkNg1301 {
    count1301 = signal(0);

    increment1301() {
      this.count1301.update((count) => count + 1);
    }
  }