
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-142',
    template: `<div class="benchmark-component">
    <h3>Component 142</h3>
    <button type="button" (click)="increment142()">
      Count {{ count142() }}
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
  export class BenchmarkNg142 {
    count142 = signal(0);

    increment142() {
      this.count142.update((count) => count + 1);
    }
  }