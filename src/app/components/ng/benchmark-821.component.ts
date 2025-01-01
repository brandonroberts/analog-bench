
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-821',
    template: `<div class="benchmark-component">
    <h3>Component 821</h3>
    <button type="button" (click)="increment821()">
      Count {{ count821() }}
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
  export class BenchmarkNg821 {
    count821 = signal(0);

    increment821() {
      this.count821.update((count) => count + 1);
    }
  }