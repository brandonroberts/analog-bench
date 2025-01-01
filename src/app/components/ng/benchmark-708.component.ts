
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-708',
    template: `<div class="benchmark-component">
    <h3>Component 708</h3>
    <button type="button" (click)="increment708()">
      Count {{ count708() }}
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
  export class BenchmarkNg708 {
    count708 = signal(0);

    increment708() {
      this.count708.update((count) => count + 1);
    }
  }