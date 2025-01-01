
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1358',
    template: `<div class="benchmark-component">
    <h3>Component 1358</h3>
    <button type="button" (click)="increment1358()">
      Count {{ count1358() }}
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
  export class BenchmarkNg1358 {
    count1358 = signal(0);

    increment1358() {
      this.count1358.update((count) => count + 1);
    }
  }