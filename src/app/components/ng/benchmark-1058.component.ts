
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1058',
    template: `<div class="benchmark-component">
    <h3>Component 1058</h3>
    <button type="button" (click)="increment1058()">
      Count {{ count1058() }}
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
  export class BenchmarkNg1058 {
    count1058 = signal(0);

    increment1058() {
      this.count1058.update((count) => count + 1);
    }
  }