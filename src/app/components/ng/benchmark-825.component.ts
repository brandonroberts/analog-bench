
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-825',
    template: `<div class="benchmark-component">
    <h3>Component 825</h3>
    <button type="button" (click)="increment825()">
      Count {{ count825() }}
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
  export class BenchmarkNg825 {
    count825 = signal(0);

    increment825() {
      this.count825.update((count) => count + 1);
    }
  }