
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-780',
    template: `<div class="benchmark-component">
    <h3>Component 780</h3>
    <button type="button" (click)="increment780()">
      Count {{ count780() }}
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
  export class BenchmarkNg780 {
    count780 = signal(0);

    increment780() {
      this.count780.update((count) => count + 1);
    }
  }