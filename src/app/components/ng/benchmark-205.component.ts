
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-205',
    template: `<div class="benchmark-component">
    <h3>Component 205</h3>
    <button type="button" (click)="increment205()">
      Count {{ count205() }}
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
  export class BenchmarkNg205 {
    count205 = signal(0);

    increment205() {
      this.count205.update((count) => count + 1);
    }
  }