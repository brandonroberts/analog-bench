
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1179',
    template: `<div class="benchmark-component">
    <h3>Component 1179</h3>
    <button type="button" (click)="increment1179()">
      Count {{ count1179() }}
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
  export class BenchmarkNg1179 {
    count1179 = signal(0);

    increment1179() {
      this.count1179.update((count) => count + 1);
    }
  }