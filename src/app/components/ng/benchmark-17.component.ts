
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-17',
    template: `<div class="benchmark-component">
    <h3>Component 17</h3>
    <button type="button" (click)="increment17()">
      Count {{ count17() }}
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
  export class BenchmarkNg17 {
    count17 = signal(0);

    increment17() {
      this.count17.update((count) => count + 1);
    }
  }