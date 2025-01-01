
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-62',
    template: `<div class="benchmark-component">
    <h3>Component 62</h3>
    <button type="button" (click)="increment62()">
      Count {{ count62() }}
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
  export class BenchmarkNg62 {
    count62 = signal(0);

    increment62() {
      this.count62.update((count) => count + 1);
    }
  }