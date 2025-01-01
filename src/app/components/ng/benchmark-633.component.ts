
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-633',
    template: `<div class="benchmark-component">
    <h3>Component 633</h3>
    <button type="button" (click)="increment633()">
      Count {{ count633() }}
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
  export class BenchmarkNg633 {
    count633 = signal(0);

    increment633() {
      this.count633.update((count) => count + 1);
    }
  }