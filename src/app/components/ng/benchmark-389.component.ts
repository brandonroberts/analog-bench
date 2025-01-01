
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-389',
    template: `<div class="benchmark-component">
    <h3>Component 389</h3>
    <button type="button" (click)="increment389()">
      Count {{ count389() }}
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
  export class BenchmarkNg389 {
    count389 = signal(0);

    increment389() {
      this.count389.update((count) => count + 1);
    }
  }