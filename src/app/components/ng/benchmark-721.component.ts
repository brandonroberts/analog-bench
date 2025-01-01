
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-721',
    template: `<div class="benchmark-component">
    <h3>Component 721</h3>
    <button type="button" (click)="increment721()">
      Count {{ count721() }}
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
  export class BenchmarkNg721 {
    count721 = signal(0);

    increment721() {
      this.count721.update((count) => count + 1);
    }
  }