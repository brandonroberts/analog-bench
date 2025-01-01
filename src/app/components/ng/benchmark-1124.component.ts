
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1124',
    template: `<div class="benchmark-component">
    <h3>Component 1124</h3>
    <button type="button" (click)="increment1124()">
      Count {{ count1124() }}
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
  export class BenchmarkNg1124 {
    count1124 = signal(0);

    increment1124() {
      this.count1124.update((count) => count + 1);
    }
  }