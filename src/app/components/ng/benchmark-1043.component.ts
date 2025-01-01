
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1043',
    template: `<div class="benchmark-component">
    <h3>Component 1043</h3>
    <button type="button" (click)="increment1043()">
      Count {{ count1043() }}
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
  export class BenchmarkNg1043 {
    count1043 = signal(0);

    increment1043() {
      this.count1043.update((count) => count + 1);
    }
  }