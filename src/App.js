import logo from "./logo.svg";
import "./App.css";
import ReactPDF from "@react-pdf/renderer";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
// const MyDocument = () => (

// );

function App() {
  // const download = () => {
  //   console.log(" ---- ");
  //   ReactPDF.render(<test />, `example.pdf`);
  // };
  const Test = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Section #1</Text>
          <Text>Section #1</Text>
          <Text>Section #1</Text>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
          <Text>Section #2</Text>
          <Text>Section #2</Text>
          <Text>Section #2</Text>
          <Text>Section #2</Text>
        </View>
      </Page>
    </Document>
  );
  return (
    <div style={{ textAlign: "center", width: "50%", margin: "auto" }}>
      <h1>React-pdf example</h1>
      {Test()}
      <br></br>
      <PDFDownloadLink document={<Test />} fileName="example.pdf">
        {({ blob, url, loading, error }) =>
          loading ? (
            "Loading document..."
          ) : (
            <button
              style={{
                fontSize: "20px",
                backgroundColor: "blue",
                color: "white",
                marginTop: 40,
              }}
            >
              Download now
            </button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
}

export default App;
