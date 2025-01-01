
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-597',
    template: `<div class="benchmark-component">
    <h3>Component 597</h3>
    <button type="button" (click)="increment597()">
      Count {{ count597() }}
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
  export class BenchmarkNg597 {
    count597 = signal(0);

    increment597() {
      this.count597.update((count) => count + 1);
    }
  }