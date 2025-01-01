
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-326',
    template: `<div class="benchmark-component">
    <h3>Component 326</h3>
    <button type="button" (click)="increment326()">
      Count {{ count326() }}
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
  export class BenchmarkNg326 {
    count326 = signal(0);

    increment326() {
      this.count326.update((count) => count + 1);
    }
  }