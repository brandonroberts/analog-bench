
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-659',
    template: `<div class="benchmark-component">
    <h3>Component 659</h3>
    <button type="button" (click)="increment659()">
      Count {{ count659() }}
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
  export class BenchmarkNg659 {
    count659 = signal(0);

    increment659() {
      this.count659.update((count) => count + 1);
    }
  }