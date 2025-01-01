
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-515',
    template: `<div class="benchmark-component">
    <h3>Component 515</h3>
    <button type="button" (click)="increment515()">
      Count {{ count515() }}
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
  export class BenchmarkNg515 {
    count515 = signal(0);

    increment515() {
      this.count515.update((count) => count + 1);
    }
  }