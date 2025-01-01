
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-173',
    template: `<div class="benchmark-component">
    <h3>Component 173</h3>
    <button type="button" (click)="increment173()">
      Count {{ count173() }}
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
  export class BenchmarkNg173 {
    count173 = signal(0);

    increment173() {
      this.count173.update((count) => count + 1);
    }
  }