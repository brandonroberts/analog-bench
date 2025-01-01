
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-113',
    template: `<div class="benchmark-component">
    <h3>Component 113</h3>
    <button type="button" (click)="increment113()">
      Count {{ count113() }}
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
  export class BenchmarkNg113 {
    count113 = signal(0);

    increment113() {
      this.count113.update((count) => count + 1);
    }
  }