
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1375',
    template: `<div class="benchmark-component">
    <h3>Component 1375</h3>
    <button type="button" (click)="increment1375()">
      Count {{ count1375() }}
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
  export class BenchmarkNg1375 {
    count1375 = signal(0);

    increment1375() {
      this.count1375.update((count) => count + 1);
    }
  }