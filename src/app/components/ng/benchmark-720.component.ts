
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-720',
    template: `<div class="benchmark-component">
    <h3>Component 720</h3>
    <button type="button" (click)="increment720()">
      Count {{ count720() }}
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
  export class BenchmarkNg720 {
    count720 = signal(0);

    increment720() {
      this.count720.update((count) => count + 1);
    }
  }