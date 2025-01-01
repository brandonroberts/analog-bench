
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-29',
    template: `<div class="benchmark-component">
    <h3>Component 29</h3>
    <button type="button" (click)="increment29()">
      Count {{ count29() }}
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
  export class BenchmarkNg29 {
    count29 = signal(0);

    increment29() {
      this.count29.update((count) => count + 1);
    }
  }