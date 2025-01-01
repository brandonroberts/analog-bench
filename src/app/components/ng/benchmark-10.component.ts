
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-10',
    template: `<div class="benchmark-component">
    <h3>Component 10</h3>
    <button type="button" (click)="increment10()">
      Count {{ count10() }}
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
  export class BenchmarkNg10 {
    count10 = signal(0);

    increment10() {
      this.count10.update((count) => count + 1);
    }
  }