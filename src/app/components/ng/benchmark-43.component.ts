
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-43',
    template: `<div class="benchmark-component">
    <h3>Component 43</h3>
    <button type="button" (click)="increment43()">
      Count {{ count43() }}
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
  export class BenchmarkNg43 {
    count43 = signal(0);

    increment43() {
      this.count43.update((count) => count + 1);
    }
  }