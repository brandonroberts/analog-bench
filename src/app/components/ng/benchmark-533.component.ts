
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-533',
    template: `<div class="benchmark-component">
    <h3>Component 533</h3>
    <button type="button" (click)="increment533()">
      Count {{ count533() }}
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
  export class BenchmarkNg533 {
    count533 = signal(0);

    increment533() {
      this.count533.update((count) => count + 1);
    }
  }