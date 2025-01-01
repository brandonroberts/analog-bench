
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-766',
    template: `<div class="benchmark-component">
    <h3>Component 766</h3>
    <button type="button" (click)="increment766()">
      Count {{ count766() }}
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
  export class BenchmarkNg766 {
    count766 = signal(0);

    increment766() {
      this.count766.update((count) => count + 1);
    }
  }