
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-773',
    template: `<div class="benchmark-component">
    <h3>Component 773</h3>
    <button type="button" (click)="increment773()">
      Count {{ count773() }}
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
  export class BenchmarkNg773 {
    count773 = signal(0);

    increment773() {
      this.count773.update((count) => count + 1);
    }
  }