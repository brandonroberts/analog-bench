
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-553',
    template: `<div class="benchmark-component">
    <h3>Component 553</h3>
    <button type="button" (click)="increment553()">
      Count {{ count553() }}
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
  export class BenchmarkNg553 {
    count553 = signal(0);

    increment553() {
      this.count553.update((count) => count + 1);
    }
  }