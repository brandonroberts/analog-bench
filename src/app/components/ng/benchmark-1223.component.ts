
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1223',
    template: `<div class="benchmark-component">
    <h3>Component 1223</h3>
    <button type="button" (click)="increment1223()">
      Count {{ count1223() }}
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
  export class BenchmarkNg1223 {
    count1223 = signal(0);

    increment1223() {
      this.count1223.update((count) => count + 1);
    }
  }