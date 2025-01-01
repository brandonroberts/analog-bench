
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1267',
    template: `<div class="benchmark-component">
    <h3>Component 1267</h3>
    <button type="button" (click)="increment1267()">
      Count {{ count1267() }}
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
  export class BenchmarkNg1267 {
    count1267 = signal(0);

    increment1267() {
      this.count1267.update((count) => count + 1);
    }
  }