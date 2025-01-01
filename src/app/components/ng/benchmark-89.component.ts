
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-89',
    template: `<div class="benchmark-component">
    <h3>Component 89</h3>
    <button type="button" (click)="increment89()">
      Count {{ count89() }}
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
  export class BenchmarkNg89 {
    count89 = signal(0);

    increment89() {
      this.count89.update((count) => count + 1);
    }
  }