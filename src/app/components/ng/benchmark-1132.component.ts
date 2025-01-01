
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1132',
    template: `<div class="benchmark-component">
    <h3>Component 1132</h3>
    <button type="button" (click)="increment1132()">
      Count {{ count1132() }}
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
  export class BenchmarkNg1132 {
    count1132 = signal(0);

    increment1132() {
      this.count1132.update((count) => count + 1);
    }
  }