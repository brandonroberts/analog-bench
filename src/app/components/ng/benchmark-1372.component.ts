
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1372',
    template: `<div class="benchmark-component">
    <h3>Component 1372</h3>
    <button type="button" (click)="increment1372()">
      Count {{ count1372() }}
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
  export class BenchmarkNg1372 {
    count1372 = signal(0);

    increment1372() {
      this.count1372.update((count) => count + 1);
    }
  }