
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-591',
    template: `<div class="benchmark-component">
    <h3>Component 591</h3>
    <button type="button" (click)="increment591()">
      Count {{ count591() }}
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
  export class BenchmarkNg591 {
    count591 = signal(0);

    increment591() {
      this.count591.update((count) => count + 1);
    }
  }