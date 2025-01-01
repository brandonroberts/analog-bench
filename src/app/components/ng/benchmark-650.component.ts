
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-650',
    template: `<div class="benchmark-component">
    <h3>Component 650</h3>
    <button type="button" (click)="increment650()">
      Count {{ count650() }}
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
  export class BenchmarkNg650 {
    count650 = signal(0);

    increment650() {
      this.count650.update((count) => count + 1);
    }
  }