
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-648',
    template: `<div class="benchmark-component">
    <h3>Component 648</h3>
    <button type="button" (click)="increment648()">
      Count {{ count648() }}
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
  export class BenchmarkNg648 {
    count648 = signal(0);

    increment648() {
      this.count648.update((count) => count + 1);
    }
  }