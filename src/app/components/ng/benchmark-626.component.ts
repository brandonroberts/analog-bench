
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-626',
    template: `<div class="benchmark-component">
    <h3>Component 626</h3>
    <button type="button" (click)="increment626()">
      Count {{ count626() }}
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
  export class BenchmarkNg626 {
    count626 = signal(0);

    increment626() {
      this.count626.update((count) => count + 1);
    }
  }