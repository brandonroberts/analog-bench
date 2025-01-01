
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-84',
    template: `<div class="benchmark-component">
    <h3>Component 84</h3>
    <button type="button" (click)="increment84()">
      Count {{ count84() }}
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
  export class BenchmarkNg84 {
    count84 = signal(0);

    increment84() {
      this.count84.update((count) => count + 1);
    }
  }