
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-703',
    template: `<div class="benchmark-component">
    <h3>Component 703</h3>
    <button type="button" (click)="increment703()">
      Count {{ count703() }}
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
  export class BenchmarkNg703 {
    count703 = signal(0);

    increment703() {
      this.count703.update((count) => count + 1);
    }
  }