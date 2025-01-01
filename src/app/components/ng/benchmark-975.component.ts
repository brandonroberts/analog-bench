
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-975',
    template: `<div class="benchmark-component">
    <h3>Component 975</h3>
    <button type="button" (click)="increment975()">
      Count {{ count975() }}
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
  export class BenchmarkNg975 {
    count975 = signal(0);

    increment975() {
      this.count975.update((count) => count + 1);
    }
  }