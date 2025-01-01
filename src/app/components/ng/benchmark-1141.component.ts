
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1141',
    template: `<div class="benchmark-component">
    <h3>Component 1141</h3>
    <button type="button" (click)="increment1141()">
      Count {{ count1141() }}
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
  export class BenchmarkNg1141 {
    count1141 = signal(0);

    increment1141() {
      this.count1141.update((count) => count + 1);
    }
  }