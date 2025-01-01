
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1169',
    template: `<div class="benchmark-component">
    <h3>Component 1169</h3>
    <button type="button" (click)="increment1169()">
      Count {{ count1169() }}
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
  export class BenchmarkNg1169 {
    count1169 = signal(0);

    increment1169() {
      this.count1169.update((count) => count + 1);
    }
  }