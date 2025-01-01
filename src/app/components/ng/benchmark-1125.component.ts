
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1125',
    template: `<div class="benchmark-component">
    <h3>Component 1125</h3>
    <button type="button" (click)="increment1125()">
      Count {{ count1125() }}
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
  export class BenchmarkNg1125 {
    count1125 = signal(0);

    increment1125() {
      this.count1125.update((count) => count + 1);
    }
  }