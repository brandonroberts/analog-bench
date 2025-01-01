
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-982',
    template: `<div class="benchmark-component">
    <h3>Component 982</h3>
    <button type="button" (click)="increment982()">
      Count {{ count982() }}
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
  export class BenchmarkNg982 {
    count982 = signal(0);

    increment982() {
      this.count982.update((count) => count + 1);
    }
  }