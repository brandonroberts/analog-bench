
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-403',
    template: `<div class="benchmark-component">
    <h3>Component 403</h3>
    <button type="button" (click)="increment403()">
      Count {{ count403() }}
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
  export class BenchmarkNg403 {
    count403 = signal(0);

    increment403() {
      this.count403.update((count) => count + 1);
    }
  }