
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-952',
    template: `<div class="benchmark-component">
    <h3>Component 952</h3>
    <button type="button" (click)="increment952()">
      Count {{ count952() }}
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
  export class BenchmarkNg952 {
    count952 = signal(0);

    increment952() {
      this.count952.update((count) => count + 1);
    }
  }