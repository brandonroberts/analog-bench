
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1400',
    template: `<div class="benchmark-component">
    <h3>Component 1400</h3>
    <button type="button" (click)="increment1400()">
      Count {{ count1400() }}
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
  export class BenchmarkNg1400 {
    count1400 = signal(0);

    increment1400() {
      this.count1400.update((count) => count + 1);
    }
  }