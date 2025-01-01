
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-727',
    template: `<div class="benchmark-component">
    <h3>Component 727</h3>
    <button type="button" (click)="increment727()">
      Count {{ count727() }}
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
  export class BenchmarkNg727 {
    count727 = signal(0);

    increment727() {
      this.count727.update((count) => count + 1);
    }
  }