
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1215',
    template: `<div class="benchmark-component">
    <h3>Component 1215</h3>
    <button type="button" (click)="increment1215()">
      Count {{ count1215() }}
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
  export class BenchmarkNg1215 {
    count1215 = signal(0);

    increment1215() {
      this.count1215.update((count) => count + 1);
    }
  }