'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import {ChakraProvider, ColorModeScript, extendTheme} from '@chakra-ui/react'
import React from "react";


const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  semanticTokens: {
    colors: {
      text: {
        100: {
          default: "#daf1f11C",
          _dark: "#daf1f11C",
          _light: "#0501091C",
        },
        200: {
          default: "#daf1f138",
          _dark: "#daf1f138",
          _light: "#05010938",
        },
        300: {
          default: "#daf1f154",
          _dark: "#daf1f154",
          _light: "#05010954",
        },
        400: {
          default: "#daf1f170",
          _dark: "#daf1f170",
          _light: "#05010970",
        },
        500: {
          default: "#daf1f18c",
          _dark: "#daf1f18c",
          _light: "#0501098c",
        },
        600: {
          default: "#daf1f1a8",
          _dark: "#daf1f1a8",
          _light: "#050109a8",
        },
        700: {
          default: "#daf1f1c4",
          _dark: "#daf1f1c4",
          _light: "#050109c4",
        },
        800: {
          default: "#daf1f1e0",
          _dark: "#daf1f1e0",
          _light: "#050109e0",
        },
        900: {
          default: "#daf1f1fc",
          _dark: "#daf1f1fc",
          _light: "#050109fc",
        },
        1000: {
          default: "#daf1f1",
          _dark: "#daf1f1",
          _light: "#050109",
        }
      },
      wtext: { // reversed text, for text in a opposite background (e.g. dark mode, light background, dark text)
        100: {
          default: "#0501091C",
          _dark: "#0501091C",
          _light: "#daf1f11C",
        },
        200: {
          default: "#05010938",
          _dark: "#05010938",
          _light: "#daf1f138",
        },
        300: {
          default: "#05010954",
          _dark: "#05010954",
          _light: "#daf1f154",
        },
        400: {
          default: "#05010970",
          _dark: "#05010970",
          _light: "#daf1f170",
        },
        500: {
          default: "#0501098c",
          _dark: "#0501098c",
          _light: "#daf1f18c",
        },
        600: {
          default: "#050109a8",
          _dark: "#050109a8",
          _light: "#daf1f1a8",
        },
        700: {
          default: "#050109c4",
          _dark: "#050109c4",
          _light: "#daf1f1c4",
        },
        800: {
          default: "#050109e0",
          _dark: "#050109e0",
          _light: "#daf1f1e0",
        },
        900: {
          default: "#050109fc",
          _dark: "#050109fc",
          _light: "#daf1f1fc",
        },
        1000: {
          default: "#050109",
          _dark: "#050109",
          _light: "#daf1f1",
        }
      },
      background: {
        100: {
          default: "#0a1a1a1C",
          _dark: "#0a1a1a1C",
          _light: "#ecdbfb1C",
        },
        200: {
          default: "#0a1a1a38",
          _dark: "#0a1a1a38",
          _light: "#ecdbfb38",
        },
        300: {
          default: "#0a1a1a54",
          _dark: "#0a1a1a54",
          _light: "#ecdbfb54",
        },
        400: {
          default: "#0a1a1a70",
          _dark: "#0a1a1a70",
          _light: "#ecdbfb70",
        },
        500: {
          default: "#0a1a1a8c",
          _dark: "#0a1a1a8c",
          _light: "#ecdbfb8c",
        },
        600: {
          default: "#0a1a1aa8",
          _dark: "#0a1a1aa8",
          _light: "#ecdbfba8",
        },
        700: {
          default: "#0a1a1ac4",
          _dark: "#0a1a1ac4",
          _light: "#ecdbfbc4",
        },
        800: {
          default: "#0a1a1ae0",
          _dark: "#0a1a1ae0",
          _light: "#ecdbfbe0",
        },
        900: {
          default: "#0a1a1afc",
          _dark: "#0a1a1afc",
          _light: "#ecdbfbfc",
        },
        1000: {
          default: "#0a1a1a",
          _dark: "#0a1a1a",
          _light: "#ecdbfb",
        }
      },
      reversebg: {
        100: {
          default: "#ecdbfb1C",
          _dark: "#ecdbfb1C",
          _light: "#0a1a1a1C",
        },
        200: {
          default: "#ecdbfb38",
          _dark: "#ecdbfb38",
          _light: "#0a1a1a38",
        },
        300: {
          default: "#ecdbfb54",
          _dark: "#ecdbfb54",
          _light: "#0a1a1a54",
        },
        400: {
          default: "#ecdbfb70",
          _dark: "#ecdbfb70",
          _light: "#0a1a1a70",
        },
        500: {
          default: "#ecdbfb8c",
          _dark: "#ecdbfb8c",
          _light: "#0a1a1a8c",
        },
        600: {
          default: "#ecdbfba8",
          _dark: "#ecdbfba8",
          _light: "#0a1a1aa8",
        },
        700: {
          default: "#ecdbfbc4",
          _dark: "#ecdbfbc4",
          _light: "#0a1a1ac4",
        },
        800: {
          default: "#ecdbfbe0",
          _dark: "#ecdbfbe0",
          _light: "#0a1a1ae0",
        },
        900: {
          default: "#ecdbfbfc",
          _dark: "#ecdbfbfc",
          _light: "#0a1a1afc",
        },
        1000: {
          default: "#ecdbfb",
          _dark: "#ecdbfb",
          _light: "#0a1a1a",
        }
      },
      primary: {
        100: {
          default: "#c563c41C",
          _dark: "#c563c41C",
          _light: "#470f761C",
        },
        200: {
          default: "#c563c438",
          _dark: "#c563c438",
          _light: "#470f7638",
        },
        300: {
          default: "#c563c454",
          _dark: "#c563c454",
          _light: "#470f7654",
        },
        400: {
          default: "#c563c470",
          _dark: "#c563c470",
          _light: "#470f7670",
        },
        500: {
          default: "#c563c48c",
          _dark: "#c563c48c",
          _light: "#470f768c",
        },
        600: {
          default: "#c563c4a8",
          _dark: "#c563c4a8",
          _light: "#470f76a8",
        },
        700: {
          default: "#c563c4c4",
          _dark: "#c563c4c4",
          _light: "#470f76c4",
        },
        800: {
          default: "#c563c4e0",
          _dark: "#c563c4e0",
          _light: "#470f76e0",
        },
        900: {
          default: "#c563c4fc",
          _dark: "#c563c4fc",
          _light: "#470f76fc",
        },
        1000: {
          default: "#c563c4",
          _dark: "#c563c4",
          _light: "#470f76",
        }
      },
      secondary: {
        100: {
          default: "#e8f8de1C",
          _dark: "#e8f8de1C",
          _light: "#dcafff1C",
        },
        200: {
          default: "#e8f8de38",
          _dark: "#e8f8de38",
          _light: "#dcafff38",
        },
        300: {
          default: "#e8f8de54",
          _dark: "#e8f8de54",
          _light: "#dcafff54",
        },
        400: {
          default: "#e8f8de70",
          _dark: "#e8f8de70",
          _light: "#dcafff70",
        },
        500: {
          default: "#e8f8de8c",
          _dark: "#e8f8de8c",
          _light: "#dcafff8c",
        },
        600: {
          default: "#e8f8dea8",
          _dark: "#e8f8dea8",
          _light: "#dcafffa8",
        },
        700: {
          default: "#e8f8dec4",
          _dark: "#e8f8dec4",
          _light: "#dcafffc4",
        },
        800: {
          default: "#e8f8dee0",
          _dark: "#e8f8dee0",
          _light: "#dcafffe0",
        },
        900: {
          default: "#e8f8defc",
          _dark: "#e8f8defc",
          _light: "#dcaffffc",
        },
        1000: {
          default: "#e8f8de",
          _dark: "#e8f8de",
          _light: "#dcafff",
        }
      },
      accent: {
        100: {
          default: "#6917361C",
          _dark: "#6917361C",
          _light: "#55118d1C",
        },
        200: {
          default: "#69173638",
          _dark: "#69173638",
          _light: "#55118d38",
        },
        300: {
          default: "#69173654",
          _dark: "#69173654",
          _light: "#55118d54",
        },
        400: {
          default: "#69173670",
          _dark: "#69173670",
          _light: "#55118d70",
        },
        500: {
          default: "#6917368c",
          _dark: "#6917368c",
          _light: "#55118d8c",
        },
        600: {
          default: "#691736a8",
          _dark: "#691736a8",
          _light: "#55118da8",
        },
        700: {
          default: "#691736c4",
          _dark: "#691736c4",
          _light: "#55118dc4",
        },
        800: {
          default: "#691736e0",
          _dark: "#691736e0",
          _light: "#55118de0",
        },
        900: {
          default: "#691736fc",
          _dark: "#691736fc",
          _light: "#55118dfc",
        },
        1000: {
          default: "#691736",
          _dark: "#691736",
          _light: "#55118d",
        }
      }
    }
  },
  styles: {
    global: {
      "html,body": {
        minH: "100vh"
      },
      body: {
        bg: "background.1000",
        color: "text.1000",
        pt: "80px"
      },
      "::-webkit-scrollbar": {
        width: "5px",
        height: "5px",
      },
      "::-webkit-scrollbar-track": {
        background: "reversebg.1000",
      },
      "::-webkit-scrollbar-thumb": {
        background: "accent.1000"
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "accent.500"
      }
    }
  }
})



export default function Providers({
    children
  }: {
  children: React.ReactNode
  }) {
  return (
    <CacheProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}