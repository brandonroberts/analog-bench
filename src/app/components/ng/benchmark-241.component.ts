
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-241',
    template: `<div class="benchmark-component">
    <h3>Component 241</h3>
    <button type="button" (click)="increment241()">
      Count {{ count241() }}
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
  export class BenchmarkNg241 {
    count241 = signal(0);

    increment241() {
      this.count241.update((count) => count + 1);
    }
  }