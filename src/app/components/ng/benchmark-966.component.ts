
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-966',
    template: `<div class="benchmark-component">
    <h3>Component 966</h3>
    <button type="button" (click)="increment966()">
      Count {{ count966() }}
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
  export class BenchmarkNg966 {
    count966 = signal(0);

    increment966() {
      this.count966.update((count) => count + 1);
    }
  }