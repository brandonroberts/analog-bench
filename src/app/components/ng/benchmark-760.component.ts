
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-760',
    template: `<div class="benchmark-component">
    <h3>Component 760</h3>
    <button type="button" (click)="increment760()">
      Count {{ count760() }}
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
  export class BenchmarkNg760 {
    count760 = signal(0);

    increment760() {
      this.count760.update((count) => count + 1);
    }
  }