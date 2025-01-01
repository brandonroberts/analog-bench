
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-196',
    template: `<div class="benchmark-component">
    <h3>Component 196</h3>
    <button type="button" (click)="increment196()">
      Count {{ count196() }}
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
  export class BenchmarkNg196 {
    count196 = signal(0);

    increment196() {
      this.count196.update((count) => count + 1);
    }
  }