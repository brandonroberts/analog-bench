
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-339',
    template: `<div class="benchmark-component">
    <h3>Component 339</h3>
    <button type="button" (click)="increment339()">
      Count {{ count339() }}
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
  export class BenchmarkNg339 {
    count339 = signal(0);

    increment339() {
      this.count339.update((count) => count + 1);
    }
  }