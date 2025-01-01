
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-642',
    template: `<div class="benchmark-component">
    <h3>Component 642</h3>
    <button type="button" (click)="increment642()">
      Count {{ count642() }}
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
  export class BenchmarkNg642 {
    count642 = signal(0);

    increment642() {
      this.count642.update((count) => count + 1);
    }
  }