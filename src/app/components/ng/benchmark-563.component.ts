
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-563',
    template: `<div class="benchmark-component">
    <h3>Component 563</h3>
    <button type="button" (click)="increment563()">
      Count {{ count563() }}
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
  export class BenchmarkNg563 {
    count563 = signal(0);

    increment563() {
      this.count563.update((count) => count + 1);
    }
  }