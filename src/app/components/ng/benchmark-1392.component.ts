
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1392',
    template: `<div class="benchmark-component">
    <h3>Component 1392</h3>
    <button type="button" (click)="increment1392()">
      Count {{ count1392() }}
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
  export class BenchmarkNg1392 {
    count1392 = signal(0);

    increment1392() {
      this.count1392.update((count) => count + 1);
    }
  }