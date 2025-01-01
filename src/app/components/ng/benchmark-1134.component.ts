
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1134',
    template: `<div class="benchmark-component">
    <h3>Component 1134</h3>
    <button type="button" (click)="increment1134()">
      Count {{ count1134() }}
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
  export class BenchmarkNg1134 {
    count1134 = signal(0);

    increment1134() {
      this.count1134.update((count) => count + 1);
    }
  }