import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;0,800;1,200;1,300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          style={{
            margin: "0",
            padding: "0",
            boxSizing: "border-box",
            fontFamily: "'Montserrat', sans-serif",
            width: "100%",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
