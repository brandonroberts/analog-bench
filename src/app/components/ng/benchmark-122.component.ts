
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-122',
    template: `<div class="benchmark-component">
    <h3>Component 122</h3>
    <button type="button" (click)="increment122()">
      Count {{ count122() }}
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
  export class BenchmarkNg122 {
    count122 = signal(0);

    increment122() {
      this.count122.update((count) => count + 1);
    }
  }