
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-148',
    template: `<div class="benchmark-component">
    <h3>Component 148</h3>
    <button type="button" (click)="increment148()">
      Count {{ count148() }}
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
  export class BenchmarkNg148 {
    count148 = signal(0);

    increment148() {
      this.count148.update((count) => count + 1);
    }
  }