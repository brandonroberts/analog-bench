
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-123',
    template: `<div class="benchmark-component">
    <h3>Component 123</h3>
    <button type="button" (click)="increment123()">
      Count {{ count123() }}
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
  export class BenchmarkNg123 {
    count123 = signal(0);

    increment123() {
      this.count123.update((count) => count + 1);
    }
  }