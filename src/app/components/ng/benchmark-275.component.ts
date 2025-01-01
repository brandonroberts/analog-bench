
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-275',
    template: `<div class="benchmark-component">
    <h3>Component 275</h3>
    <button type="button" (click)="increment275()">
      Count {{ count275() }}
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
  export class BenchmarkNg275 {
    count275 = signal(0);

    increment275() {
      this.count275.update((count) => count + 1);
    }
  }