
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-880',
    template: `<div class="benchmark-component">
    <h3>Component 880</h3>
    <button type="button" (click)="increment880()">
      Count {{ count880() }}
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
  export class BenchmarkNg880 {
    count880 = signal(0);

    increment880() {
      this.count880.update((count) => count + 1);
    }
  }