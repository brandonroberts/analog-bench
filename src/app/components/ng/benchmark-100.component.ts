
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-100',
    template: `<div class="benchmark-component">
    <h3>Component 100</h3>
    <button type="button" (click)="increment100()">
      Count {{ count100() }}
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
  export class BenchmarkNg100 {
    count100 = signal(0);

    increment100() {
      this.count100.update((count) => count + 1);
    }
  }