
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-608',
    template: `<div class="benchmark-component">
    <h3>Component 608</h3>
    <button type="button" (click)="increment608()">
      Count {{ count608() }}
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
  export class BenchmarkNg608 {
    count608 = signal(0);

    increment608() {
      this.count608.update((count) => count + 1);
    }
  }