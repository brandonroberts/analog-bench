
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-325',
    template: `<div class="benchmark-component">
    <h3>Component 325</h3>
    <button type="button" (click)="increment325()">
      Count {{ count325() }}
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
  export class BenchmarkNg325 {
    count325 = signal(0);

    increment325() {
      this.count325.update((count) => count + 1);
    }
  }