
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1152',
    template: `<div class="benchmark-component">
    <h3>Component 1152</h3>
    <button type="button" (click)="increment1152()">
      Count {{ count1152() }}
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
  export class BenchmarkNg1152 {
    count1152 = signal(0);

    increment1152() {
      this.count1152.update((count) => count + 1);
    }
  }