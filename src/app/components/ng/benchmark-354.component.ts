
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-354',
    template: `<div class="benchmark-component">
    <h3>Component 354</h3>
    <button type="button" (click)="increment354()">
      Count {{ count354() }}
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
  export class BenchmarkNg354 {
    count354 = signal(0);

    increment354() {
      this.count354.update((count) => count + 1);
    }
  }