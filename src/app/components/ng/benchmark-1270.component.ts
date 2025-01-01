
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1270',
    template: `<div class="benchmark-component">
    <h3>Component 1270</h3>
    <button type="button" (click)="increment1270()">
      Count {{ count1270() }}
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
  export class BenchmarkNg1270 {
    count1270 = signal(0);

    increment1270() {
      this.count1270.update((count) => count + 1);
    }
  }