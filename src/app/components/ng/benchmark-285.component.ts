
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-285',
    template: `<div class="benchmark-component">
    <h3>Component 285</h3>
    <button type="button" (click)="increment285()">
      Count {{ count285() }}
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
  export class BenchmarkNg285 {
    count285 = signal(0);

    increment285() {
      this.count285.update((count) => count + 1);
    }
  }