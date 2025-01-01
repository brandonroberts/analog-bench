
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-974',
    template: `<div class="benchmark-component">
    <h3>Component 974</h3>
    <button type="button" (click)="increment974()">
      Count {{ count974() }}
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
  export class BenchmarkNg974 {
    count974 = signal(0);

    increment974() {
      this.count974.update((count) => count + 1);
    }
  }