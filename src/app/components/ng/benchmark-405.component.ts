
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-405',
    template: `<div class="benchmark-component">
    <h3>Component 405</h3>
    <button type="button" (click)="increment405()">
      Count {{ count405() }}
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
  export class BenchmarkNg405 {
    count405 = signal(0);

    increment405() {
      this.count405.update((count) => count + 1);
    }
  }