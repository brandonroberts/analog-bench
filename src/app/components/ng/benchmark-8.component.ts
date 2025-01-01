
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-8',
    template: `<div class="benchmark-component">
    <h3>Component 8</h3>
    <button type="button" (click)="increment8()">
      Count {{ count8() }}
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
  export class BenchmarkNg8 {
    count8 = signal(0);

    increment8() {
      this.count8.update((count) => count + 1);
    }
  }