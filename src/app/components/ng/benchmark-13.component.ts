
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-13',
    template: `<div class="benchmark-component">
    <h3>Component 13</h3>
    <button type="button" (click)="increment13()">
      Count {{ count13() }}
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
  export class BenchmarkNg13 {
    count13 = signal(0);

    increment13() {
      this.count13.update((count) => count + 1);
    }
  }