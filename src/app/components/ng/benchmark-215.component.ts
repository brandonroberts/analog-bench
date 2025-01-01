
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-215',
    template: `<div class="benchmark-component">
    <h3>Component 215</h3>
    <button type="button" (click)="increment215()">
      Count {{ count215() }}
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
  export class BenchmarkNg215 {
    count215 = signal(0);

    increment215() {
      this.count215.update((count) => count + 1);
    }
  }