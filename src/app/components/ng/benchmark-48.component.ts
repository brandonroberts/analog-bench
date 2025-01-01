
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-48',
    template: `<div class="benchmark-component">
    <h3>Component 48</h3>
    <button type="button" (click)="increment48()">
      Count {{ count48() }}
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
  export class BenchmarkNg48 {
    count48 = signal(0);

    increment48() {
      this.count48.update((count) => count + 1);
    }
  }