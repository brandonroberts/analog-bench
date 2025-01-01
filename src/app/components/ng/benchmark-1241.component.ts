
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1241',
    template: `<div class="benchmark-component">
    <h3>Component 1241</h3>
    <button type="button" (click)="increment1241()">
      Count {{ count1241() }}
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
  export class BenchmarkNg1241 {
    count1241 = signal(0);

    increment1241() {
      this.count1241.update((count) => count + 1);
    }
  }