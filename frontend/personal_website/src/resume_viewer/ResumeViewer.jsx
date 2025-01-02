import React from 'react';

function PDFViewer({ pdfUrl }) {
  return (
    <embed src={pdfUrl} type="application/pdf" style={{ width: '100%', height: '100%' }} ></embed>
  )
}

export default PDFViewer;