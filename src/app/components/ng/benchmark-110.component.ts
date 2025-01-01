
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-110',
    template: `<div class="benchmark-component">
    <h3>Component 110</h3>
    <button type="button" (click)="increment110()">
      Count {{ count110() }}
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
  export class BenchmarkNg110 {
    count110 = signal(0);

    increment110() {
      this.count110.update((count) => count + 1);
    }
  }