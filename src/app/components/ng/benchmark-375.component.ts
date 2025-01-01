
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-375',
    template: `<div class="benchmark-component">
    <h3>Component 375</h3>
    <button type="button" (click)="increment375()">
      Count {{ count375() }}
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
  export class BenchmarkNg375 {
    count375 = signal(0);

    increment375() {
      this.count375.update((count) => count + 1);
    }
  }