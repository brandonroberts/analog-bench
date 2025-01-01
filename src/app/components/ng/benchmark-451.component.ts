
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-451',
    template: `<div class="benchmark-component">
    <h3>Component 451</h3>
    <button type="button" (click)="increment451()">
      Count {{ count451() }}
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
  export class BenchmarkNg451 {
    count451 = signal(0);

    increment451() {
      this.count451.update((count) => count + 1);
    }
  }