
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-878',
    template: `<div class="benchmark-component">
    <h3>Component 878</h3>
    <button type="button" (click)="increment878()">
      Count {{ count878() }}
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
  export class BenchmarkNg878 {
    count878 = signal(0);

    increment878() {
      this.count878.update((count) => count + 1);
    }
  }