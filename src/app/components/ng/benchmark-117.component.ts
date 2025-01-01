
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-117',
    template: `<div class="benchmark-component">
    <h3>Component 117</h3>
    <button type="button" (click)="increment117()">
      Count {{ count117() }}
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
  export class BenchmarkNg117 {
    count117 = signal(0);

    increment117() {
      this.count117.update((count) => count + 1);
    }
  }