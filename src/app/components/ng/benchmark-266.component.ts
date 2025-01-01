
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-266',
    template: `<div class="benchmark-component">
    <h3>Component 266</h3>
    <button type="button" (click)="increment266()">
      Count {{ count266() }}
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
  export class BenchmarkNg266 {
    count266 = signal(0);

    increment266() {
      this.count266.update((count) => count + 1);
    }
  }