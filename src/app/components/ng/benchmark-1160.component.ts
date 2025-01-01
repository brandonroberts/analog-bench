
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1160',
    template: `<div class="benchmark-component">
    <h3>Component 1160</h3>
    <button type="button" (click)="increment1160()">
      Count {{ count1160() }}
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
  export class BenchmarkNg1160 {
    count1160 = signal(0);

    increment1160() {
      this.count1160.update((count) => count + 1);
    }
  }