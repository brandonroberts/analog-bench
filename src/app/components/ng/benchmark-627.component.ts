
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-627',
    template: `<div class="benchmark-component">
    <h3>Component 627</h3>
    <button type="button" (click)="increment627()">
      Count {{ count627() }}
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
  export class BenchmarkNg627 {
    count627 = signal(0);

    increment627() {
      this.count627.update((count) => count + 1);
    }
  }