
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-764',
    template: `<div class="benchmark-component">
    <h3>Component 764</h3>
    <button type="button" (click)="increment764()">
      Count {{ count764() }}
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
  export class BenchmarkNg764 {
    count764 = signal(0);

    increment764() {
      this.count764.update((count) => count + 1);
    }
  }