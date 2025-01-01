
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-120',
    template: `<div class="benchmark-component">
    <h3>Component 120</h3>
    <button type="button" (click)="increment120()">
      Count {{ count120() }}
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
  export class BenchmarkNg120 {
    count120 = signal(0);

    increment120() {
      this.count120.update((count) => count + 1);
    }
  }