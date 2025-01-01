
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-77',
    template: `<div class="benchmark-component">
    <h3>Component 77</h3>
    <button type="button" (click)="increment77()">
      Count {{ count77() }}
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
  export class BenchmarkNg77 {
    count77 = signal(0);

    increment77() {
      this.count77.update((count) => count + 1);
    }
  }