
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-156',
    template: `<div class="benchmark-component">
    <h3>Component 156</h3>
    <button type="button" (click)="increment156()">
      Count {{ count156() }}
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
  export class BenchmarkNg156 {
    count156 = signal(0);

    increment156() {
      this.count156.update((count) => count + 1);
    }
  }