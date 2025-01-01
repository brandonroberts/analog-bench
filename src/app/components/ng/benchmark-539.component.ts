
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-539',
    template: `<div class="benchmark-component">
    <h3>Component 539</h3>
    <button type="button" (click)="increment539()">
      Count {{ count539() }}
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
  export class BenchmarkNg539 {
    count539 = signal(0);

    increment539() {
      this.count539.update((count) => count + 1);
    }
  }