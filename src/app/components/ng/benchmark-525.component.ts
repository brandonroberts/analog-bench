
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-525',
    template: `<div class="benchmark-component">
    <h3>Component 525</h3>
    <button type="button" (click)="increment525()">
      Count {{ count525() }}
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
  export class BenchmarkNg525 {
    count525 = signal(0);

    increment525() {
      this.count525.update((count) => count + 1);
    }
  }