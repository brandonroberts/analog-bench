
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-989',
    template: `<div class="benchmark-component">
    <h3>Component 989</h3>
    <button type="button" (click)="increment989()">
      Count {{ count989() }}
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
  export class BenchmarkNg989 {
    count989 = signal(0);

    increment989() {
      this.count989.update((count) => count + 1);
    }
  }