
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-908',
    template: `<div class="benchmark-component">
    <h3>Component 908</h3>
    <button type="button" (click)="increment908()">
      Count {{ count908() }}
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
  export class BenchmarkNg908 {
    count908 = signal(0);

    increment908() {
      this.count908.update((count) => count + 1);
    }
  }