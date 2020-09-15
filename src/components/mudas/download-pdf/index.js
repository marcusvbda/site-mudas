import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import './styles.scss'

const DownloadPdf = () => {

    const handleDownload = () => {
        var link = document.createElement("a")
        link.download = name
        link.href = `/LISTA DE MUDAS (CARVALHO) .pdf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <Row>
            <a className="download-pdf col-12 d-flex flex-row align-items-center" target="_BLANK" onClick={handleDownload}>
                <Image src="/download_pdf.png"
                    height={75}
                    alt="Download PDF" />
                <span className="ml-3 donwload-text">Baixar Lista Completa de Mudas</span>
            </a>
        </Row>
    )
}

export default DownloadPdf