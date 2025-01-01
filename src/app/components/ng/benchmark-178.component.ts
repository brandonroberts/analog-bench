
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-178',
    template: `<div class="benchmark-component">
    <h3>Component 178</h3>
    <button type="button" (click)="increment178()">
      Count {{ count178() }}
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
  export class BenchmarkNg178 {
    count178 = signal(0);

    increment178() {
      this.count178.update((count) => count + 1);
    }
  }