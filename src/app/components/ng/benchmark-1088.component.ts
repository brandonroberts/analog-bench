
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1088',
    template: `<div class="benchmark-component">
    <h3>Component 1088</h3>
    <button type="button" (click)="increment1088()">
      Count {{ count1088() }}
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
  export class BenchmarkNg1088 {
    count1088 = signal(0);

    increment1088() {
      this.count1088.update((count) => count + 1);
    }
  }