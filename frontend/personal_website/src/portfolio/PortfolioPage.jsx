import { BACKEND_URL } from "../constants"
import PDFViewer from "../resume_viewer/ResumeViewer"
import { Divider } from "@mui/material"
import { Container, Row, Col } from 'react-bootstrap';


function PortFolioPage() {
  return (
    <>
      <Container>
        <Row>
          <Col style={{display: 'flex',
            justifyContent: 'flex-start', alignItems: 'center'}}>
            <h1 style={{ textAlign: 'left'}}>Resume</h1>
          </Col>
          <Col>
            <div style={{ width: '50vw', height: '90vh', margin: '0 auto' }}>
              <PDFViewer pdfUrl={BACKEND_URL + '/resume.pdf'}></PDFViewer>
            </div>
          </Col>
        </Row>
        <Row>
        <Col style={{display: 'flex',
            justifyContent: 'flex-start', alignItems: 'center'}}>
            <h1 style={{ textAlign: 'left'}}>Timeline</h1>
          </Col>
        <Col> <h1>todo</h1></Col>
        </Row>
      </Container>
    </>
  )
}

export default PortFolioPage
