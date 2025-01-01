
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-287',
    template: `<div class="benchmark-component">
    <h3>Component 287</h3>
    <button type="button" (click)="increment287()">
      Count {{ count287() }}
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
  export class BenchmarkNg287 {
    count287 = signal(0);

    increment287() {
      this.count287.update((count) => count + 1);
    }
  }