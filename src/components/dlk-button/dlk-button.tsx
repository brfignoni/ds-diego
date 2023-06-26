import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'dlk-button',
  styleUrl: 'dlk-button.scss',
  shadow: true,
})
export class DlkButton {
  render() {
    return (
      <Host role="button">
        <slot></slot>
      </Host>
    );
  }
}
