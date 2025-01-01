
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-44',
    template: `<div class="benchmark-component">
    <h3>Component 44</h3>
    <button type="button" (click)="increment44()">
      Count {{ count44() }}
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
  export class BenchmarkNg44 {
    count44 = signal(0);

    increment44() {
      this.count44.update((count) => count + 1);
    }
  }