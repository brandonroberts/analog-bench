
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1350',
    template: `<div class="benchmark-component">
    <h3>Component 1350</h3>
    <button type="button" (click)="increment1350()">
      Count {{ count1350() }}
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
  export class BenchmarkNg1350 {
    count1350 = signal(0);

    increment1350() {
      this.count1350.update((count) => count + 1);
    }
  }