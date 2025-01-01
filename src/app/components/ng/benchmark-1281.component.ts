
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1281',
    template: `<div class="benchmark-component">
    <h3>Component 1281</h3>
    <button type="button" (click)="increment1281()">
      Count {{ count1281() }}
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
  export class BenchmarkNg1281 {
    count1281 = signal(0);

    increment1281() {
      this.count1281.update((count) => count + 1);
    }
  }