import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// TODO MAKE THIS DISPLAY IN BROWSER INSTEAD OF DIRECT DOWNLOAD!!
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const pdfUrl = '../assets/resume.pdf';

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-container">
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        options={{ workerSrc: '/pdf.worker.js' }}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} width={600} />
        ))}
      </Document>
    </div>
  );
};

export default PdfViewer;