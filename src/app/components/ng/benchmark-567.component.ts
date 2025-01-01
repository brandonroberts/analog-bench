
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-567',
    template: `<div class="benchmark-component">
    <h3>Component 567</h3>
    <button type="button" (click)="increment567()">
      Count {{ count567() }}
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
  export class BenchmarkNg567 {
    count567 = signal(0);

    increment567() {
      this.count567.update((count) => count + 1);
    }
  }