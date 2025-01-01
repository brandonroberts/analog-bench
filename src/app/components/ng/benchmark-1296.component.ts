
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1296',
    template: `<div class="benchmark-component">
    <h3>Component 1296</h3>
    <button type="button" (click)="increment1296()">
      Count {{ count1296() }}
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
  export class BenchmarkNg1296 {
    count1296 = signal(0);

    increment1296() {
      this.count1296.update((count) => count + 1);
    }
  }