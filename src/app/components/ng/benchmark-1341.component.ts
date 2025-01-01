
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1341',
    template: `<div class="benchmark-component">
    <h3>Component 1341</h3>
    <button type="button" (click)="increment1341()">
      Count {{ count1341() }}
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
  export class BenchmarkNg1341 {
    count1341 = signal(0);

    increment1341() {
      this.count1341.update((count) => count + 1);
    }
  }