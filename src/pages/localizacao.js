import React, { useContext } from 'react'
import { GlobalContext } from '@/src/context/globalContext'
import Template from '@/src/components/template'
import { Container, Row, Col } from 'react-bootstrap'
import dynamic from 'next/dynamic'
const Iframe = dynamic(() => import('@/src/components/logic/iframe'))

const LocationPage = () => {
	const { app } = useContext(GlobalContext)

	return (
		<Template title="Localização" isMobile={app.isMobile} current="location">
			<Container>
				<h3 className="font-weight-light f-50 my-4 text-md-left text-sm-center">🗺️ Localização</h3>
				<Row>
					<Col>
						<b className="mr-2">Endereço :</b>Rod. Cmte. João Ribeiro de Barros - Rodovia, Herculândia - SP, 17650-000
                    </Col>
				</Row>
				<Row className="mt-4 d-flex justify-content-center">
					<Col className="container-iframe" style={{ height: 550 }}>
						<Iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3477.543990327228!2d-50.3941551852187!3d-22.007288785476575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDAwJzI2LjIiUyA1MMKwMjMnMzEuMSJX!5e1!3m2!1spt-BR!2sbr!4v1613410287545!5m2!1spt-BR!2sbr"
						/>
					</Col>
				</Row>
			</Container>
		</Template>
	)
}
export default LocationPage