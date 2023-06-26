import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'dlk-list',
  styleUrl: 'dlk-list.scss',
  shadow: true,
})
export class DlkList {
  render() {
    return (
      <Host role="list">
        <slot></slot>
      </Host>
    );
  }
}
