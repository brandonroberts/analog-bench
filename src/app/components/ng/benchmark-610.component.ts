
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-610',
    template: `<div class="benchmark-component">
    <h3>Component 610</h3>
    <button type="button" (click)="increment610()">
      Count {{ count610() }}
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
  export class BenchmarkNg610 {
    count610 = signal(0);

    increment610() {
      this.count610.update((count) => count + 1);
    }
  }