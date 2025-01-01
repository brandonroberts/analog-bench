
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-692',
    template: `<div class="benchmark-component">
    <h3>Component 692</h3>
    <button type="button" (click)="increment692()">
      Count {{ count692() }}
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
  export class BenchmarkNg692 {
    count692 = signal(0);

    increment692() {
      this.count692.update((count) => count + 1);
    }
  }