
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-747',
    template: `<div class="benchmark-component">
    <h3>Component 747</h3>
    <button type="button" (click)="increment747()">
      Count {{ count747() }}
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
  export class BenchmarkNg747 {
    count747 = signal(0);

    increment747() {
      this.count747.update((count) => count + 1);
    }
  }