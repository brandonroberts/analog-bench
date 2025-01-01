
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-789',
    template: `<div class="benchmark-component">
    <h3>Component 789</h3>
    <button type="button" (click)="increment789()">
      Count {{ count789() }}
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
  export class BenchmarkNg789 {
    count789 = signal(0);

    increment789() {
      this.count789.update((count) => count + 1);
    }
  }