
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-884',
    template: `<div class="benchmark-component">
    <h3>Component 884</h3>
    <button type="button" (click)="increment884()">
      Count {{ count884() }}
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
  export class BenchmarkNg884 {
    count884 = signal(0);

    increment884() {
      this.count884.update((count) => count + 1);
    }
  }