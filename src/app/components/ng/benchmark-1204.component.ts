
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1204',
    template: `<div class="benchmark-component">
    <h3>Component 1204</h3>
    <button type="button" (click)="increment1204()">
      Count {{ count1204() }}
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
  export class BenchmarkNg1204 {
    count1204 = signal(0);

    increment1204() {
      this.count1204.update((count) => count + 1);
    }
  }