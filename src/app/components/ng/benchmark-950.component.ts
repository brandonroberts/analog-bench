
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-950',
    template: `<div class="benchmark-component">
    <h3>Component 950</h3>
    <button type="button" (click)="increment950()">
      Count {{ count950() }}
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
  export class BenchmarkNg950 {
    count950 = signal(0);

    increment950() {
      this.count950.update((count) => count + 1);
    }
  }