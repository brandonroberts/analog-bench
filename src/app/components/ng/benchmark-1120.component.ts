
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1120',
    template: `<div class="benchmark-component">
    <h3>Component 1120</h3>
    <button type="button" (click)="increment1120()">
      Count {{ count1120() }}
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
  export class BenchmarkNg1120 {
    count1120 = signal(0);

    increment1120() {
      this.count1120.update((count) => count + 1);
    }
  }