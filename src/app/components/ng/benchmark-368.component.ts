
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-368',
    template: `<div class="benchmark-component">
    <h3>Component 368</h3>
    <button type="button" (click)="increment368()">
      Count {{ count368() }}
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
  export class BenchmarkNg368 {
    count368 = signal(0);

    increment368() {
      this.count368.update((count) => count + 1);
    }
  }