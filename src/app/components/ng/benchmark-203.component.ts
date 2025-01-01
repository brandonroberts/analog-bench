
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-203',
    template: `<div class="benchmark-component">
    <h3>Component 203</h3>
    <button type="button" (click)="increment203()">
      Count {{ count203() }}
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
  export class BenchmarkNg203 {
    count203 = signal(0);

    increment203() {
      this.count203.update((count) => count + 1);
    }
  }