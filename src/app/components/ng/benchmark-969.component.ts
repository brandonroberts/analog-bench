
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-969',
    template: `<div class="benchmark-component">
    <h3>Component 969</h3>
    <button type="button" (click)="increment969()">
      Count {{ count969() }}
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
  export class BenchmarkNg969 {
    count969 = signal(0);

    increment969() {
      this.count969.update((count) => count + 1);
    }
  }