
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-996',
    template: `<div class="benchmark-component">
    <h3>Component 996</h3>
    <button type="button" (click)="increment996()">
      Count {{ count996() }}
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
  export class BenchmarkNg996 {
    count996 = signal(0);

    increment996() {
      this.count996.update((count) => count + 1);
    }
  }