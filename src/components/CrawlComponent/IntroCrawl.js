import * as React from "react"
import Crawl from 'react-star-wars-crawl'

// Import the necessary styles, or include them another way with your build process
import './index.css'

export const IntroCrawl = () => {
  const styles = {
    container: {
      width: "100%",
      height: "100%",
      background: "#000",
      overflow: "hidden",
      zIndex: "0",
    },
    fade: {
      position: "absolute",
      width: "100%",
      top: "-25px",
      backgroundImage: "linear-gradient(0deg, transparent, black 75%)",
      zIndex: "0"
    },
    textContainer: {
      display: "flex",
      justifyContent: "center",
      position: "relative",
      minHeight: "0",
      color: "#feda4a",
      fontFamily: "'Pathway Gothic One', sans-serif",
      fontSize: "500%",
      fontWeight: "600",
      letterSpacing: "6px",
      lineHeight: "150%",
      perspective: "400px",
      backgroundColor: "black",
      background: "#000",
      textAlign: "justify",
      zIndex: 5,
    },
    crawl: {
      position: "absolute",
      top: "9999px",
      transformOrigin: "50% 100%",
      animation: "crawl 5s ease-in",
      minHeight: 0,
      background: "#000",
    },
    title: {
      fontSize: "90%",
      textAlign: "center",
      textTransform: "uppercase"
    },
    subTitle: {
      margin: "0 0 100px",
      textTransform: "uppercase"
    }
  }

  return <Crawl
    title={<h1>WHEN I WORK INTERVIEW STEP IV</h1>}
    subTitle={<h2>Coding Challenge</h2>}
    containerStyles={styles.container}
    textContainerStyles={styles.textContainer}
    crawlStyles={styles.crawl}
    titleStyles={styles.title}
    subTitleStyles={styles.subTitle}
    textStyles={{ title: styles.title, subTitle: styles.subtitle }}
  >
    <section>
      <h3>Using a public API, display a list of all Star Wars characters using SWAPI - The Star Wars API.</h3>
      <p>For every character, we’d like to display a card</p>
      <p>Challenges that use a code generator (ie. Code pilot, ChatGPT) to complete the
        challenge will NOT be accepted.</p>

      <p>Loading...</p>
    </section>
  </Crawl>
}