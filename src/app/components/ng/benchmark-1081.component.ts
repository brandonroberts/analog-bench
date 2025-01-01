
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1081',
    template: `<div class="benchmark-component">
    <h3>Component 1081</h3>
    <button type="button" (click)="increment1081()">
      Count {{ count1081() }}
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
  export class BenchmarkNg1081 {
    count1081 = signal(0);

    increment1081() {
      this.count1081.update((count) => count + 1);
    }
  }