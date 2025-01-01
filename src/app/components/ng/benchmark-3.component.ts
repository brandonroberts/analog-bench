
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-3',
    template: `<div class="benchmark-component">
    <h3>Component 3</h3>
    <button type="button" (click)="increment3()">
      Count {{ count3() }}
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
  export class BenchmarkNg3 {
    count3 = signal(0);

    increment3() {
      this.count3.update((count) => count + 1);
    }
  }