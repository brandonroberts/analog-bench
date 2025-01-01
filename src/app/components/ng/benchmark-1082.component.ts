
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1082',
    template: `<div class="benchmark-component">
    <h3>Component 1082</h3>
    <button type="button" (click)="increment1082()">
      Count {{ count1082() }}
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
  export class BenchmarkNg1082 {
    count1082 = signal(0);

    increment1082() {
      this.count1082.update((count) => count + 1);
    }
  }