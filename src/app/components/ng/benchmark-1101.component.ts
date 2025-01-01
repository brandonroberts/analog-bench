
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1101',
    template: `<div class="benchmark-component">
    <h3>Component 1101</h3>
    <button type="button" (click)="increment1101()">
      Count {{ count1101() }}
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
  export class BenchmarkNg1101 {
    count1101 = signal(0);

    increment1101() {
      this.count1101.update((count) => count + 1);
    }
  }