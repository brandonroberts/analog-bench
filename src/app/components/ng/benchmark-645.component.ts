
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-645',
    template: `<div class="benchmark-component">
    <h3>Component 645</h3>
    <button type="button" (click)="increment645()">
      Count {{ count645() }}
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
  export class BenchmarkNg645 {
    count645 = signal(0);

    increment645() {
      this.count645.update((count) => count + 1);
    }
  }