
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1229',
    template: `<div class="benchmark-component">
    <h3>Component 1229</h3>
    <button type="button" (click)="increment1229()">
      Count {{ count1229() }}
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
  export class BenchmarkNg1229 {
    count1229 = signal(0);

    increment1229() {
      this.count1229.update((count) => count + 1);
    }
  }