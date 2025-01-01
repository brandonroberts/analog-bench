
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-417',
    template: `<div class="benchmark-component">
    <h3>Component 417</h3>
    <button type="button" (click)="increment417()">
      Count {{ count417() }}
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
  export class BenchmarkNg417 {
    count417 = signal(0);

    increment417() {
      this.count417.update((count) => count + 1);
    }
  }