
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-888',
    template: `<div class="benchmark-component">
    <h3>Component 888</h3>
    <button type="button" (click)="increment888()">
      Count {{ count888() }}
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
  export class BenchmarkNg888 {
    count888 = signal(0);

    increment888() {
      this.count888.update((count) => count + 1);
    }
  }