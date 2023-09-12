import React from 'react';

const PdfViewer = () => {
  const pdfUrl = '../assets/resume.pdf';

  return (
    <div className="pdf-container">
      <iframe
        title="PDF Viewer"
        src={pdfUrl}
        width="100%"
        height="500px" // Adjust the height as needed
        frameBorder="0"
      >
        This browser does not support PDFs. Please download the PDF to view it.
      </iframe>
    </div>
  );
};

export default PdfViewer;



