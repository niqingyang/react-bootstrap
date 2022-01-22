import * as React from 'react';

const context = React.createContext<unknown | null>(null);
context.displayName = 'InputWrapperContext';

export default context;
