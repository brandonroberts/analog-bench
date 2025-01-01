
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-923',
    template: `<div class="benchmark-component">
    <h3>Component 923</h3>
    <button type="button" (click)="increment923()">
      Count {{ count923() }}
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
  export class BenchmarkNg923 {
    count923 = signal(0);

    increment923() {
      this.count923.update((count) => count + 1);
    }
  }