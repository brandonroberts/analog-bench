
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-839',
    template: `<div class="benchmark-component">
    <h3>Component 839</h3>
    <button type="button" (click)="increment839()">
      Count {{ count839() }}
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
  export class BenchmarkNg839 {
    count839 = signal(0);

    increment839() {
      this.count839.update((count) => count + 1);
    }
  }