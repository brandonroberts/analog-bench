
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-631',
    template: `<div class="benchmark-component">
    <h3>Component 631</h3>
    <button type="button" (click)="increment631()">
      Count {{ count631() }}
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
  export class BenchmarkNg631 {
    count631 = signal(0);

    increment631() {
      this.count631.update((count) => count + 1);
    }
  }