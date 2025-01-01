
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-644',
    template: `<div class="benchmark-component">
    <h3>Component 644</h3>
    <button type="button" (click)="increment644()">
      Count {{ count644() }}
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
  export class BenchmarkNg644 {
    count644 = signal(0);

    increment644() {
      this.count644.update((count) => count + 1);
    }
  }