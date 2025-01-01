
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-729',
    template: `<div class="benchmark-component">
    <h3>Component 729</h3>
    <button type="button" (click)="increment729()">
      Count {{ count729() }}
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
  export class BenchmarkNg729 {
    count729 = signal(0);

    increment729() {
      this.count729.update((count) => count + 1);
    }
  }