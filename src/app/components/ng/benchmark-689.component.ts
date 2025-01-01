
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-689',
    template: `<div class="benchmark-component">
    <h3>Component 689</h3>
    <button type="button" (click)="increment689()">
      Count {{ count689() }}
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
  export class BenchmarkNg689 {
    count689 = signal(0);

    increment689() {
      this.count689.update((count) => count + 1);
    }
  }