
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-235',
    template: `<div class="benchmark-component">
    <h3>Component 235</h3>
    <button type="button" (click)="increment235()">
      Count {{ count235() }}
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
  export class BenchmarkNg235 {
    count235 = signal(0);

    increment235() {
      this.count235.update((count) => count + 1);
    }
  }