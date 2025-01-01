
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1347',
    template: `<div class="benchmark-component">
    <h3>Component 1347</h3>
    <button type="button" (click)="increment1347()">
      Count {{ count1347() }}
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
  export class BenchmarkNg1347 {
    count1347 = signal(0);

    increment1347() {
      this.count1347.update((count) => count + 1);
    }
  }