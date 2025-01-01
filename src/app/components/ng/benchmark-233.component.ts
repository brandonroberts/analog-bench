
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-233',
    template: `<div class="benchmark-component">
    <h3>Component 233</h3>
    <button type="button" (click)="increment233()">
      Count {{ count233() }}
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
  export class BenchmarkNg233 {
    count233 = signal(0);

    increment233() {
      this.count233.update((count) => count + 1);
    }
  }