
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-620',
    template: `<div class="benchmark-component">
    <h3>Component 620</h3>
    <button type="button" (click)="increment620()">
      Count {{ count620() }}
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
  export class BenchmarkNg620 {
    count620 = signal(0);

    increment620() {
      this.count620.update((count) => count + 1);
    }
  }