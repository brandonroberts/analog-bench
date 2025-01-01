
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-761',
    template: `<div class="benchmark-component">
    <h3>Component 761</h3>
    <button type="button" (click)="increment761()">
      Count {{ count761() }}
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
  export class BenchmarkNg761 {
    count761 = signal(0);

    increment761() {
      this.count761.update((count) => count + 1);
    }
  }