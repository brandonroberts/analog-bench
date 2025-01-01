
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-450',
    template: `<div class="benchmark-component">
    <h3>Component 450</h3>
    <button type="button" (click)="increment450()">
      Count {{ count450() }}
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
  export class BenchmarkNg450 {
    count450 = signal(0);

    increment450() {
      this.count450.update((count) => count + 1);
    }
  }