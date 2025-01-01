
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-663',
    template: `<div class="benchmark-component">
    <h3>Component 663</h3>
    <button type="button" (click)="increment663()">
      Count {{ count663() }}
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
  export class BenchmarkNg663 {
    count663 = signal(0);

    increment663() {
      this.count663.update((count) => count + 1);
    }
  }