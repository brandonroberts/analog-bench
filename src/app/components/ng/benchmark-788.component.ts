
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-788',
    template: `<div class="benchmark-component">
    <h3>Component 788</h3>
    <button type="button" (click)="increment788()">
      Count {{ count788() }}
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
  export class BenchmarkNg788 {
    count788 = signal(0);

    increment788() {
      this.count788.update((count) => count + 1);
    }
  }