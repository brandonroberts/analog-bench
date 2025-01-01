
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-796',
    template: `<div class="benchmark-component">
    <h3>Component 796</h3>
    <button type="button" (click)="increment796()">
      Count {{ count796() }}
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
  export class BenchmarkNg796 {
    count796 = signal(0);

    increment796() {
      this.count796.update((count) => count + 1);
    }
  }