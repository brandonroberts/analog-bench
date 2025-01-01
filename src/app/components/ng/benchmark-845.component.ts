
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-845',
    template: `<div class="benchmark-component">
    <h3>Component 845</h3>
    <button type="button" (click)="increment845()">
      Count {{ count845() }}
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
  export class BenchmarkNg845 {
    count845 = signal(0);

    increment845() {
      this.count845.update((count) => count + 1);
    }
  }