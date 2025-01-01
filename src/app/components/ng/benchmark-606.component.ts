
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-606',
    template: `<div class="benchmark-component">
    <h3>Component 606</h3>
    <button type="button" (click)="increment606()">
      Count {{ count606() }}
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
  export class BenchmarkNg606 {
    count606 = signal(0);

    increment606() {
      this.count606.update((count) => count + 1);
    }
  }