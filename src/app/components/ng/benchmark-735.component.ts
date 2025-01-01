
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-735',
    template: `<div class="benchmark-component">
    <h3>Component 735</h3>
    <button type="button" (click)="increment735()">
      Count {{ count735() }}
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
  export class BenchmarkNg735 {
    count735 = signal(0);

    increment735() {
      this.count735.update((count) => count + 1);
    }
  }