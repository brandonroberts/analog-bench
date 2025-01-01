
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-194',
    template: `<div class="benchmark-component">
    <h3>Component 194</h3>
    <button type="button" (click)="increment194()">
      Count {{ count194() }}
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
  export class BenchmarkNg194 {
    count194 = signal(0);

    increment194() {
      this.count194.update((count) => count + 1);
    }
  }