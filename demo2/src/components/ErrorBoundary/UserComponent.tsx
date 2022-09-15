import React, { Component, ReactNode } from 'react';
import { LayoutContainer } from '../LayoutContainer/LayoutContainer';

interface UserProps {
  children: ReactNode;
}

interface UserState {
  hasError: boolean;
}

export class User extends Component<UserProps, UserState> {
  constructor(props: UserProps) {
    super(props);
    this.state = { hasError: false };
    }

    componentDidMount() {
        //api call here.
	}

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  // componentDidCatch(error: Error, errorInfo: ErrorInfo): void { /* Do something with error. */ }

  render(): ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <LayoutContainer role="alert">
          <p>There was an error.</p>
        </LayoutContainer>
      );
    }

    return children;
  }
}
