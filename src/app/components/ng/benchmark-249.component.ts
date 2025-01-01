
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-249',
    template: `<div class="benchmark-component">
    <h3>Component 249</h3>
    <button type="button" (click)="increment249()">
      Count {{ count249() }}
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
  export class BenchmarkNg249 {
    count249 = signal(0);

    increment249() {
      this.count249.update((count) => count + 1);
    }
  }