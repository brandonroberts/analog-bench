
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-246',
    template: `<div class="benchmark-component">
    <h3>Component 246</h3>
    <button type="button" (click)="increment246()">
      Count {{ count246() }}
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
  export class BenchmarkNg246 {
    count246 = signal(0);

    increment246() {
      this.count246.update((count) => count + 1);
    }
  }