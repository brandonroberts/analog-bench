
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-238',
    template: `<div class="benchmark-component">
    <h3>Component 238</h3>
    <button type="button" (click)="increment238()">
      Count {{ count238() }}
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
  export class BenchmarkNg238 {
    count238 = signal(0);

    increment238() {
      this.count238.update((count) => count + 1);
    }
  }