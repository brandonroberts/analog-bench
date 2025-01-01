
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-342',
    template: `<div class="benchmark-component">
    <h3>Component 342</h3>
    <button type="button" (click)="increment342()">
      Count {{ count342() }}
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
  export class BenchmarkNg342 {
    count342 = signal(0);

    increment342() {
      this.count342.update((count) => count + 1);
    }
  }