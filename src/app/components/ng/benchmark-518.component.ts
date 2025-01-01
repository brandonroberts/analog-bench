
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-518',
    template: `<div class="benchmark-component">
    <h3>Component 518</h3>
    <button type="button" (click)="increment518()">
      Count {{ count518() }}
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
  export class BenchmarkNg518 {
    count518 = signal(0);

    increment518() {
      this.count518.update((count) => count + 1);
    }
  }