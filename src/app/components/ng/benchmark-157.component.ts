
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-157',
    template: `<div class="benchmark-component">
    <h3>Component 157</h3>
    <button type="button" (click)="increment157()">
      Count {{ count157() }}
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
  export class BenchmarkNg157 {
    count157 = signal(0);

    increment157() {
      this.count157.update((count) => count + 1);
    }
  }