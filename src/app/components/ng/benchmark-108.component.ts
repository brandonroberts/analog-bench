
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-108',
    template: `<div class="benchmark-component">
    <h3>Component 108</h3>
    <button type="button" (click)="increment108()">
      Count {{ count108() }}
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
  export class BenchmarkNg108 {
    count108 = signal(0);

    increment108() {
      this.count108.update((count) => count + 1);
    }
  }