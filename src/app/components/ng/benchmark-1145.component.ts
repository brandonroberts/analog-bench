
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1145',
    template: `<div class="benchmark-component">
    <h3>Component 1145</h3>
    <button type="button" (click)="increment1145()">
      Count {{ count1145() }}
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
  export class BenchmarkNg1145 {
    count1145 = signal(0);

    increment1145() {
      this.count1145.update((count) => count + 1);
    }
  }