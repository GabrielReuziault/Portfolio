// File: src/pages/_document.tsx
import Document, {
   Html,
   Head,
   Main,
   NextScript,
   DocumentContext,
 } from "next/document";
 
 class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext) {
     const initialProps = await Document.getInitialProps(ctx);
     return { ...initialProps };
   }
 
   render() {
     return (
       <Html lang="fr">
         <Head>
           {/* Fonts loaded via <link> pour performance */}
           <link
             rel="preconnect"
             href="https://fonts.googleapis.com"
             crossOrigin="anonymous"
           />
           <link
             href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap"
             rel="stylesheet"
           />
           {/* Meta SEO de base */}
           <meta name="description" content="Portfolio de Gabriel Reuziault" />
         </Head>
         <body className="scrollbar-thin scrollbar-thumb-rounded">
           <Main />
           <NextScript />
         </body>
       </Html>
     );
   }
 }
 
 export default MyDocument;
 