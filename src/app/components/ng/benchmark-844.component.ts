
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-844',
    template: `<div class="benchmark-component">
    <h3>Component 844</h3>
    <button type="button" (click)="increment844()">
      Count {{ count844() }}
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
  export class BenchmarkNg844 {
    count844 = signal(0);

    increment844() {
      this.count844.update((count) => count + 1);
    }
  }