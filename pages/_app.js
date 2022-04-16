import '../styles/globals.css'

function GlobalStyle() {
    return (
      <style global jsx>{`
          * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
          
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          
          height: 100%;
          min-height: 100vh;
          display: flex;
          flex: 1;
          
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
  
        /* ./App fit Height */ 
        
        ::-webkit-scrollbar {
          width: 12px;               /* width of the entire scrollbar */
        }
        
        ::-webkit-scrollbar-track {
          background: #0F5959;        /* color of the tracking area */
        }
        
        ::-webkit-scrollbar-thumb {
          background-color: #22D993;    /* color of the scroll thumb */
          border-radius: 20px;       /* roundness of the scroll thumb */
          border: 3px solid #000000;  /* creates padding around scroll thumb */
        }
        
        `}</style>
    )
  }
  





export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    )
}