
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-269',
    template: `<div class="benchmark-component">
    <h3>Component 269</h3>
    <button type="button" (click)="increment269()">
      Count {{ count269() }}
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
  export class BenchmarkNg269 {
    count269 = signal(0);

    increment269() {
      this.count269.update((count) => count + 1);
    }
  }