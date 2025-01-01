
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1176',
    template: `<div class="benchmark-component">
    <h3>Component 1176</h3>
    <button type="button" (click)="increment1176()">
      Count {{ count1176() }}
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
  export class BenchmarkNg1176 {
    count1176 = signal(0);

    increment1176() {
      this.count1176.update((count) => count + 1);
    }
  }