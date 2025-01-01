
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-1256',
    template: `<div class="benchmark-component">
    <h3>Component 1256</h3>
    <button type="button" (click)="increment1256()">
      Count {{ count1256() }}
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
  export class BenchmarkNg1256 {
    count1256 = signal(0);

    increment1256() {
      this.count1256.update((count) => count + 1);
    }
  }