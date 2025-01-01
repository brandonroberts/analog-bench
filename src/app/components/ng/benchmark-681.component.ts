
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-681',
    template: `<div class="benchmark-component">
    <h3>Component 681</h3>
    <button type="button" (click)="increment681()">
      Count {{ count681() }}
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
  export class BenchmarkNg681 {
    count681 = signal(0);

    increment681() {
      this.count681.update((count) => count + 1);
    }
  }