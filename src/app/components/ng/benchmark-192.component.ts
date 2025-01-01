
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-192',
    template: `<div class="benchmark-component">
    <h3>Component 192</h3>
    <button type="button" (click)="increment192()">
      Count {{ count192() }}
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
  export class BenchmarkNg192 {
    count192 = signal(0);

    increment192() {
      this.count192.update((count) => count + 1);
    }
  }