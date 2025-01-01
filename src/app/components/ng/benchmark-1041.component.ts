
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1041',
    template: `<div class="benchmark-component">
    <h3>Component 1041</h3>
    <button type="button" (click)="increment1041()">
      Count {{ count1041() }}
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
  export class BenchmarkNg1041 {
    count1041 = signal(0);

    increment1041() {
      this.count1041.update((count) => count + 1);
    }
  }