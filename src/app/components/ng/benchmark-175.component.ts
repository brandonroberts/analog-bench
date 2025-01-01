
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-175',
    template: `<div class="benchmark-component">
    <h3>Component 175</h3>
    <button type="button" (click)="increment175()">
      Count {{ count175() }}
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
  export class BenchmarkNg175 {
    count175 = signal(0);

    increment175() {
      this.count175.update((count) => count + 1);
    }
  }