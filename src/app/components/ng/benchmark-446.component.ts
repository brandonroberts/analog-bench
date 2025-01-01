
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-446',
    template: `<div class="benchmark-component">
    <h3>Component 446</h3>
    <button type="button" (click)="increment446()">
      Count {{ count446() }}
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
  export class BenchmarkNg446 {
    count446 = signal(0);

    increment446() {
      this.count446.update((count) => count + 1);
    }
  }