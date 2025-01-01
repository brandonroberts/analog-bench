
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-284',
    template: `<div class="benchmark-component">
    <h3>Component 284</h3>
    <button type="button" (click)="increment284()">
      Count {{ count284() }}
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
  export class BenchmarkNg284 {
    count284 = signal(0);

    increment284() {
      this.count284.update((count) => count + 1);
    }
  }