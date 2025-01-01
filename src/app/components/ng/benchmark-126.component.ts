
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-126',
    template: `<div class="benchmark-component">
    <h3>Component 126</h3>
    <button type="button" (click)="increment126()">
      Count {{ count126() }}
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
  export class BenchmarkNg126 {
    count126 = signal(0);

    increment126() {
      this.count126.update((count) => count + 1);
    }
  }