
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-936',
    template: `<div class="benchmark-component">
    <h3>Component 936</h3>
    <button type="button" (click)="increment936()">
      Count {{ count936() }}
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
  export class BenchmarkNg936 {
    count936 = signal(0);

    increment936() {
      this.count936.update((count) => count + 1);
    }
  }