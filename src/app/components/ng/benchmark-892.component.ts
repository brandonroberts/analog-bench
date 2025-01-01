
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-892',
    template: `<div class="benchmark-component">
    <h3>Component 892</h3>
    <button type="button" (click)="increment892()">
      Count {{ count892() }}
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
  export class BenchmarkNg892 {
    count892 = signal(0);

    increment892() {
      this.count892.update((count) => count + 1);
    }
  }