
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-920',
    template: `<div class="benchmark-component">
    <h3>Component 920</h3>
    <button type="button" (click)="increment920()">
      Count {{ count920() }}
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
  export class BenchmarkNg920 {
    count920 = signal(0);

    increment920() {
      this.count920.update((count) => count + 1);
    }
  }