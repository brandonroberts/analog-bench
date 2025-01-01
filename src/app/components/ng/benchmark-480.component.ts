
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-480',
    template: `<div class="benchmark-component">
    <h3>Component 480</h3>
    <button type="button" (click)="increment480()">
      Count {{ count480() }}
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
  export class BenchmarkNg480 {
    count480 = signal(0);

    increment480() {
      this.count480.update((count) => count + 1);
    }
  }