import { useState } from "react";

import { Document, Page, pdfjs } from "react-pdf";

// import workerSrc from "pdfjs-dist/build/pdf.worker.entry";

import GCertificate from "../assets/pdf/80G-certificate.pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/5.3.31/pdf.worker.min.js';


const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log("PDF loaded with", numPages, "pages");
    setNumPages(numPages);
  };

  return (
    <div>
      <Document file={GCertificate} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (elem, idx) => {
          return <Page key={`page_${idx + 1}`} pageNumber={idx + 1} />;
        })}
      </Document>
    </div>
  );
};

export default PdfViewer;
