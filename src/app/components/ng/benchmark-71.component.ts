
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-71',
    template: `<div class="benchmark-component">
    <h3>Component 71</h3>
    <button type="button" (click)="increment71()">
      Count {{ count71() }}
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
  export class BenchmarkNg71 {
    count71 = signal(0);

    increment71() {
      this.count71.update((count) => count + 1);
    }
  }