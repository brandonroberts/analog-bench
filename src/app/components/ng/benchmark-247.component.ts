
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-247',
    template: `<div class="benchmark-component">
    <h3>Component 247</h3>
    <button type="button" (click)="increment247()">
      Count {{ count247() }}
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
  export class BenchmarkNg247 {
    count247 = signal(0);

    increment247() {
      this.count247.update((count) => count + 1);
    }
  }