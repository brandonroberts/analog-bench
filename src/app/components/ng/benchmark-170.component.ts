
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-170',
    template: `<div class="benchmark-component">
    <h3>Component 170</h3>
    <button type="button" (click)="increment170()">
      Count {{ count170() }}
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
  export class BenchmarkNg170 {
    count170 = signal(0);

    increment170() {
      this.count170.update((count) => count + 1);
    }
  }