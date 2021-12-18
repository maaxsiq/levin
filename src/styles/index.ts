import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        color: black;
        margin: 0;
        padding: 0;
        font-family: Montserrat;
    }

    * {
        margin: 0;
        padding: 0;
        &::-webkit-scrollbar {
                width: 10px;
            }

            /* Track */
            ::-webkit-scrollbar-track {
            background: #08012a;
            margin-top: 25px;
            margin-bottom: 25px;
            }

            /* Handle */
            ::-webkit-scrollbar-thumb {
            background: #71cd84;
            }

            /* Handle on hover */
            ::-webkit-scrollbar-thumb:hover {
            background: rgb(240, 200, 8);
            }
    }
`
export default GlobalStyle;
