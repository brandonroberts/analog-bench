
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-636',
    template: `<div class="benchmark-component">
    <h3>Component 636</h3>
    <button type="button" (click)="increment636()">
      Count {{ count636() }}
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
  export class BenchmarkNg636 {
    count636 = signal(0);

    increment636() {
      this.count636.update((count) => count + 1);
    }
  }