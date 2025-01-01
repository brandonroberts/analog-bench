
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1280',
    template: `<div class="benchmark-component">
    <h3>Component 1280</h3>
    <button type="button" (click)="increment1280()">
      Count {{ count1280() }}
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
  export class BenchmarkNg1280 {
    count1280 = signal(0);

    increment1280() {
      this.count1280.update((count) => count + 1);
    }
  }