
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-243',
    template: `<div class="benchmark-component">
    <h3>Component 243</h3>
    <button type="button" (click)="increment243()">
      Count {{ count243() }}
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
  export class BenchmarkNg243 {
    count243 = signal(0);

    increment243() {
      this.count243.update((count) => count + 1);
    }
  }