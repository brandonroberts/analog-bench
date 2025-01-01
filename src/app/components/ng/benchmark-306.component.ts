
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-306',
    template: `<div class="benchmark-component">
    <h3>Component 306</h3>
    <button type="button" (click)="increment306()">
      Count {{ count306() }}
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
  export class BenchmarkNg306 {
    count306 = signal(0);

    increment306() {
      this.count306.update((count) => count + 1);
    }
  }