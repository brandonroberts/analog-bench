
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-427',
    template: `<div class="benchmark-component">
    <h3>Component 427</h3>
    <button type="button" (click)="increment427()">
      Count {{ count427() }}
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
  export class BenchmarkNg427 {
    count427 = signal(0);

    increment427() {
      this.count427.update((count) => count + 1);
    }
  }