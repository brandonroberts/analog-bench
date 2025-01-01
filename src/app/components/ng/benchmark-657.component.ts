
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-657',
    template: `<div class="benchmark-component">
    <h3>Component 657</h3>
    <button type="button" (click)="increment657()">
      Count {{ count657() }}
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
  export class BenchmarkNg657 {
    count657 = signal(0);

    increment657() {
      this.count657.update((count) => count + 1);
    }
  }