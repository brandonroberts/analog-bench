
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-694',
    template: `<div class="benchmark-component">
    <h3>Component 694</h3>
    <button type="button" (click)="increment694()">
      Count {{ count694() }}
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
  export class BenchmarkNg694 {
    count694 = signal(0);

    increment694() {
      this.count694.update((count) => count + 1);
    }
  }