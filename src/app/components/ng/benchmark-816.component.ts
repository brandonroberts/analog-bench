
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-816',
    template: `<div class="benchmark-component">
    <h3>Component 816</h3>
    <button type="button" (click)="increment816()">
      Count {{ count816() }}
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
  export class BenchmarkNg816 {
    count816 = signal(0);

    increment816() {
      this.count816.update((count) => count + 1);
    }
  }