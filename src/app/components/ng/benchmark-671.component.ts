
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-671',
    template: `<div class="benchmark-component">
    <h3>Component 671</h3>
    <button type="button" (click)="increment671()">
      Count {{ count671() }}
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
  export class BenchmarkNg671 {
    count671 = signal(0);

    increment671() {
      this.count671.update((count) => count + 1);
    }
  }