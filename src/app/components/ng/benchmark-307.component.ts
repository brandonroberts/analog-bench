
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-307',
    template: `<div class="benchmark-component">
    <h3>Component 307</h3>
    <button type="button" (click)="increment307()">
      Count {{ count307() }}
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
  export class BenchmarkNg307 {
    count307 = signal(0);

    increment307() {
      this.count307.update((count) => count + 1);
    }
  }