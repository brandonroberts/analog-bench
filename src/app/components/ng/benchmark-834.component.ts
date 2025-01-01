
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-834',
    template: `<div class="benchmark-component">
    <h3>Component 834</h3>
    <button type="button" (click)="increment834()">
      Count {{ count834() }}
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
  export class BenchmarkNg834 {
    count834 = signal(0);

    increment834() {
      this.count834.update((count) => count + 1);
    }
  }