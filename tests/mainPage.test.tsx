import React from 'react';
import App from '../src/App';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('IncreaseButton', () => {
    test('renders the correct greeting', () => {
        render(<App />);
        expect(screen.getByText('Vite + React')).to.not.exist;
    });
});
