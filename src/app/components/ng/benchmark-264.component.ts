
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-264',
    template: `<div class="benchmark-component">
    <h3>Component 264</h3>
    <button type="button" (click)="increment264()">
      Count {{ count264() }}
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
  export class BenchmarkNg264 {
    count264 = signal(0);

    increment264() {
      this.count264.update((count) => count + 1);
    }
  }