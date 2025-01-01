
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-647',
    template: `<div class="benchmark-component">
    <h3>Component 647</h3>
    <button type="button" (click)="increment647()">
      Count {{ count647() }}
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
  export class BenchmarkNg647 {
    count647 = signal(0);

    increment647() {
      this.count647.update((count) => count + 1);
    }
  }