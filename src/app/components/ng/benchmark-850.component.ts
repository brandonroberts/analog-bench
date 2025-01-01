
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-850',
    template: `<div class="benchmark-component">
    <h3>Component 850</h3>
    <button type="button" (click)="increment850()">
      Count {{ count850() }}
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
  export class BenchmarkNg850 {
    count850 = signal(0);

    increment850() {
      this.count850.update((count) => count + 1);
    }
  }