
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-646',
    template: `<div class="benchmark-component">
    <h3>Component 646</h3>
    <button type="button" (click)="increment646()">
      Count {{ count646() }}
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
  export class BenchmarkNg646 {
    count646 = signal(0);

    increment646() {
      this.count646.update((count) => count + 1);
    }
  }