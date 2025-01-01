
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-320',
    template: `<div class="benchmark-component">
    <h3>Component 320</h3>
    <button type="button" (click)="increment320()">
      Count {{ count320() }}
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
  export class BenchmarkNg320 {
    count320 = signal(0);

    increment320() {
      this.count320.update((count) => count + 1);
    }
  }