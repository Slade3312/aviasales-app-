/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { ErrorState } from '../store/types';

export default class ErrorBoundary extends Component<{ props: ChildNode }, ErrorState> {
  constructor(props: never) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children;
  }
}
