
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-218',
    template: `<div class="benchmark-component">
    <h3>Component 218</h3>
    <button type="button" (click)="increment218()">
      Count {{ count218() }}
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
  export class BenchmarkNg218 {
    count218 = signal(0);

    increment218() {
      this.count218.update((count) => count + 1);
    }
  }