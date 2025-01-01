
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-293',
    template: `<div class="benchmark-component">
    <h3>Component 293</h3>
    <button type="button" (click)="increment293()">
      Count {{ count293() }}
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
  export class BenchmarkNg293 {
    count293 = signal(0);

    increment293() {
      this.count293.update((count) => count + 1);
    }
  }