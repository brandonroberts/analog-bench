
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-487',
    template: `<div class="benchmark-component">
    <h3>Component 487</h3>
    <button type="button" (click)="increment487()">
      Count {{ count487() }}
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
  export class BenchmarkNg487 {
    count487 = signal(0);

    increment487() {
      this.count487.update((count) => count + 1);
    }
  }