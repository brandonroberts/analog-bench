
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-759',
    template: `<div class="benchmark-component">
    <h3>Component 759</h3>
    <button type="button" (click)="increment759()">
      Count {{ count759() }}
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
  export class BenchmarkNg759 {
    count759 = signal(0);

    increment759() {
      this.count759.update((count) => count + 1);
    }
  }