
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-955',
    template: `<div class="benchmark-component">
    <h3>Component 955</h3>
    <button type="button" (click)="increment955()">
      Count {{ count955() }}
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
  export class BenchmarkNg955 {
    count955 = signal(0);

    increment955() {
      this.count955.update((count) => count + 1);
    }
  }