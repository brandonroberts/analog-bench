
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-54',
    template: `<div class="benchmark-component">
    <h3>Component 54</h3>
    <button type="button" (click)="increment54()">
      Count {{ count54() }}
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
  export class BenchmarkNg54 {
    count54 = signal(0);

    increment54() {
      this.count54.update((count) => count + 1);
    }
  }