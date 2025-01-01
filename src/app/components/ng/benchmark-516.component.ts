
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-516',
    template: `<div class="benchmark-component">
    <h3>Component 516</h3>
    <button type="button" (click)="increment516()">
      Count {{ count516() }}
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
  export class BenchmarkNg516 {
    count516 = signal(0);

    increment516() {
      this.count516.update((count) => count + 1);
    }
  }