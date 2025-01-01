
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-585',
    template: `<div class="benchmark-component">
    <h3>Component 585</h3>
    <button type="button" (click)="increment585()">
      Count {{ count585() }}
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
  export class BenchmarkNg585 {
    count585 = signal(0);

    increment585() {
      this.count585.update((count) => count + 1);
    }
  }