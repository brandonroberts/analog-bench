
import { Component, signal } from '@angular/core';

  @Component({
    selector: 'benchmark-ng-190',
    template: `<div class="benchmark-component">
    <h3>Component 190</h3>
    <button type="button" (click)="increment190()">
      Count {{ count190() }}
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
  export class BenchmarkNg190 {
    count190 = signal(0);

    increment190() {
      this.count190.update((count) => count + 1);
    }
  }