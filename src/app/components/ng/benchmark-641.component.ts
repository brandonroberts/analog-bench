
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-641',
    template: `<div class="benchmark-component">
    <h3>Component 641</h3>
    <button type="button" (click)="increment641()">
      Count {{ count641() }}
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
  export class BenchmarkNg641 {
    count641 = signal(0);

    increment641() {
      this.count641.update((count) => count + 1);
    }
  }