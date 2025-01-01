
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-186',
    template: `<div class="benchmark-component">
    <h3>Component 186</h3>
    <button type="button" (click)="increment186()">
      Count {{ count186() }}
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
  export class BenchmarkNg186 {
    count186 = signal(0);

    increment186() {
      this.count186.update((count) => count + 1);
    }
  }