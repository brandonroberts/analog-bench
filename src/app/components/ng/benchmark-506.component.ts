
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-506',
    template: `<div class="benchmark-component">
    <h3>Component 506</h3>
    <button type="button" (click)="increment506()">
      Count {{ count506() }}
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
  export class BenchmarkNg506 {
    count506 = signal(0);

    increment506() {
      this.count506.update((count) => count + 1);
    }
  }