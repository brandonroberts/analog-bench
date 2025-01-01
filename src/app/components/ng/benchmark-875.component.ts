
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-875',
    template: `<div class="benchmark-component">
    <h3>Component 875</h3>
    <button type="button" (click)="increment875()">
      Count {{ count875() }}
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
  export class BenchmarkNg875 {
    count875 = signal(0);

    increment875() {
      this.count875.update((count) => count + 1);
    }
  }