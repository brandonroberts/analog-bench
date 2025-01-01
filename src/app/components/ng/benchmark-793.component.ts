
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-793',
    template: `<div class="benchmark-component">
    <h3>Component 793</h3>
    <button type="button" (click)="increment793()">
      Count {{ count793() }}
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
  export class BenchmarkNg793 {
    count793 = signal(0);

    increment793() {
      this.count793.update((count) => count + 1);
    }
  }