import React from 'react'
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Inline } from '@zendeskgarden/react-loaders'

function Loader() {
    return (
        <ThemeProvider>
            <Inline size="68"/>
       </ThemeProvider>
    )
}

export default Loader;
