
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1118',
    template: `<div class="benchmark-component">
    <h3>Component 1118</h3>
    <button type="button" (click)="increment1118()">
      Count {{ count1118() }}
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
  export class BenchmarkNg1118 {
    count1118 = signal(0);

    increment1118() {
      this.count1118.update((count) => count + 1);
    }
  }