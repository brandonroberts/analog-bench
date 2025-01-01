
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-733',
    template: `<div class="benchmark-component">
    <h3>Component 733</h3>
    <button type="button" (click)="increment733()">
      Count {{ count733() }}
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
  export class BenchmarkNg733 {
    count733 = signal(0);

    increment733() {
      this.count733.update((count) => count + 1);
    }
  }