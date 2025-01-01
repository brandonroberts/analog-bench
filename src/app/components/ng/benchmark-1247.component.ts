
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1247',
    template: `<div class="benchmark-component">
    <h3>Component 1247</h3>
    <button type="button" (click)="increment1247()">
      Count {{ count1247() }}
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
  export class BenchmarkNg1247 {
    count1247 = signal(0);

    increment1247() {
      this.count1247.update((count) => count + 1);
    }
  }