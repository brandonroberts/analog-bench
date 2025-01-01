
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-237',
    template: `<div class="benchmark-component">
    <h3>Component 237</h3>
    <button type="button" (click)="increment237()">
      Count {{ count237() }}
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
  export class BenchmarkNg237 {
    count237 = signal(0);

    increment237() {
      this.count237.update((count) => count + 1);
    }
  }