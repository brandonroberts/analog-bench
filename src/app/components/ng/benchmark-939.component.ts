
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-939',
    template: `<div class="benchmark-component">
    <h3>Component 939</h3>
    <button type="button" (click)="increment939()">
      Count {{ count939() }}
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
  export class BenchmarkNg939 {
    count939 = signal(0);

    increment939() {
      this.count939.update((count) => count + 1);
    }
  }