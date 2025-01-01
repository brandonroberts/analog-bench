
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-725',
    template: `<div class="benchmark-component">
    <h3>Component 725</h3>
    <button type="button" (click)="increment725()">
      Count {{ count725() }}
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
  export class BenchmarkNg725 {
    count725 = signal(0);

    increment725() {
      this.count725.update((count) => count + 1);
    }
  }