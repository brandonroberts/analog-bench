
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-889',
    template: `<div class="benchmark-component">
    <h3>Component 889</h3>
    <button type="button" (click)="increment889()">
      Count {{ count889() }}
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
  export class BenchmarkNg889 {
    count889 = signal(0);

    increment889() {
      this.count889.update((count) => count + 1);
    }
  }