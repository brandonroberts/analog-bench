
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-872',
    template: `<div class="benchmark-component">
    <h3>Component 872</h3>
    <button type="button" (click)="increment872()">
      Count {{ count872() }}
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
  export class BenchmarkNg872 {
    count872 = signal(0);

    increment872() {
      this.count872.update((count) => count + 1);
    }
  }