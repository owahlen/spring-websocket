import { createContext } from 'react';
import { StompSessionProviderContext } from './StompSessionProviderContext';

const StompContext = createContext<StompSessionProviderContext | undefined>(
    undefined
);

export default StompContext;
