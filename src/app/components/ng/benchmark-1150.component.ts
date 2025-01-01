
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1150',
    template: `<div class="benchmark-component">
    <h3>Component 1150</h3>
    <button type="button" (click)="increment1150()">
      Count {{ count1150() }}
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
  export class BenchmarkNg1150 {
    count1150 = signal(0);

    increment1150() {
      this.count1150.update((count) => count + 1);
    }
  }