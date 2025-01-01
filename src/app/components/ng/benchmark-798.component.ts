
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-798',
    template: `<div class="benchmark-component">
    <h3>Component 798</h3>
    <button type="button" (click)="increment798()">
      Count {{ count798() }}
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
  export class BenchmarkNg798 {
    count798 = signal(0);

    increment798() {
      this.count798.update((count) => count + 1);
    }
  }