
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-674',
    template: `<div class="benchmark-component">
    <h3>Component 674</h3>
    <button type="button" (click)="increment674()">
      Count {{ count674() }}
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
  export class BenchmarkNg674 {
    count674 = signal(0);

    increment674() {
      this.count674.update((count) => count + 1);
    }
  }