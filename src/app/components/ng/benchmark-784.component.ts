
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-784',
    template: `<div class="benchmark-component">
    <h3>Component 784</h3>
    <button type="button" (click)="increment784()">
      Count {{ count784() }}
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
  export class BenchmarkNg784 {
    count784 = signal(0);

    increment784() {
      this.count784.update((count) => count + 1);
    }
  }