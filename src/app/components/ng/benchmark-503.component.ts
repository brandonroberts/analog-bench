
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-503',
    template: `<div class="benchmark-component">
    <h3>Component 503</h3>
    <button type="button" (click)="increment503()">
      Count {{ count503() }}
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
  export class BenchmarkNg503 {
    count503 = signal(0);

    increment503() {
      this.count503.update((count) => count + 1);
    }
  }