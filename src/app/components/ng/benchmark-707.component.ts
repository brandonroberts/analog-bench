
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-707',
    template: `<div class="benchmark-component">
    <h3>Component 707</h3>
    <button type="button" (click)="increment707()">
      Count {{ count707() }}
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
  export class BenchmarkNg707 {
    count707 = signal(0);

    increment707() {
      this.count707.update((count) => count + 1);
    }
  }