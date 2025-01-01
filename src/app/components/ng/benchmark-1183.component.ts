
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1183',
    template: `<div class="benchmark-component">
    <h3>Component 1183</h3>
    <button type="button" (click)="increment1183()">
      Count {{ count1183() }}
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
  export class BenchmarkNg1183 {
    count1183 = signal(0);

    increment1183() {
      this.count1183.update((count) => count + 1);
    }
  }