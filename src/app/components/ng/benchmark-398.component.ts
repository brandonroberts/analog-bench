
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-398',
    template: `<div class="benchmark-component">
    <h3>Component 398</h3>
    <button type="button" (click)="increment398()">
      Count {{ count398() }}
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
  export class BenchmarkNg398 {
    count398 = signal(0);

    increment398() {
      this.count398.update((count) => count + 1);
    }
  }