
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-949',
    template: `<div class="benchmark-component">
    <h3>Component 949</h3>
    <button type="button" (click)="increment949()">
      Count {{ count949() }}
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
  export class BenchmarkNg949 {
    count949 = signal(0);

    increment949() {
      this.count949.update((count) => count + 1);
    }
  }