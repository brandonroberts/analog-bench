
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-134',
    template: `<div class="benchmark-component">
    <h3>Component 134</h3>
    <button type="button" (click)="increment134()">
      Count {{ count134() }}
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
  export class BenchmarkNg134 {
    count134 = signal(0);

    increment134() {
      this.count134.update((count) => count + 1);
    }
  }