
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-392',
    template: `<div class="benchmark-component">
    <h3>Component 392</h3>
    <button type="button" (click)="increment392()">
      Count {{ count392() }}
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
  export class BenchmarkNg392 {
    count392 = signal(0);

    increment392() {
      this.count392.update((count) => count + 1);
    }
  }