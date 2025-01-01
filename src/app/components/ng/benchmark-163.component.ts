
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-163',
    template: `<div class="benchmark-component">
    <h3>Component 163</h3>
    <button type="button" (click)="increment163()">
      Count {{ count163() }}
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
  export class BenchmarkNg163 {
    count163 = signal(0);

    increment163() {
      this.count163.update((count) => count + 1);
    }
  }