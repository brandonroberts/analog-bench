
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-106',
    template: `<div class="benchmark-component">
    <h3>Component 106</h3>
    <button type="button" (click)="increment106()">
      Count {{ count106() }}
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
  export class BenchmarkNg106 {
    count106 = signal(0);

    increment106() {
      this.count106.update((count) => count + 1);
    }
  }