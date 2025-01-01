
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1279',
    template: `<div class="benchmark-component">
    <h3>Component 1279</h3>
    <button type="button" (click)="increment1279()">
      Count {{ count1279() }}
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
  export class BenchmarkNg1279 {
    count1279 = signal(0);

    increment1279() {
      this.count1279.update((count) => count + 1);
    }
  }