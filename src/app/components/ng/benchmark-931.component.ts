
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-931',
    template: `<div class="benchmark-component">
    <h3>Component 931</h3>
    <button type="button" (click)="increment931()">
      Count {{ count931() }}
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
  export class BenchmarkNg931 {
    count931 = signal(0);

    increment931() {
      this.count931.update((count) => count + 1);
    }
  }