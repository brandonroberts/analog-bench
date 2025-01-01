
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-667',
    template: `<div class="benchmark-component">
    <h3>Component 667</h3>
    <button type="button" (click)="increment667()">
      Count {{ count667() }}
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
  export class BenchmarkNg667 {
    count667 = signal(0);

    increment667() {
      this.count667.update((count) => count + 1);
    }
  }