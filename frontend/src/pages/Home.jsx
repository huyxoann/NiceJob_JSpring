import NavbarCustom from "../components/Navbar.jsx";
import {Button, Col, Container, Row, Stack} from "react-bootstrap";
import {Briefcase} from "react-bootstrap-icons";
import FindJobForm from "../components/FindJobForm.jsx";
import onemountLogo from "../assets/images/company_icons/onemoutn.webp";
import fptLogo from "../assets/images/company_icons/fpt.webp";
import tikiLogo from "../assets/images/company_icons/tiki.webp";
import prudentialLogo from "../assets/images/company_icons/prudential.webp";
import teachcombankLogo from "../assets/images/company_icons/teachcombank.webp";
import viettelLogo from "../assets/images/company_icons/viettel.webp";
import company1 from "../assets/images/company2.jpg";
import React from "react";
import './Home.css'

function Home() {
    return (
        <>
            <Container className={""}>
                <Row id={"jobs-content"} className={"border border-3 border-secondary rounded"}>
                    <Col id={"header-jobs-content"} className={"d-flex p-5 align-items-center justify-content-center"}>
                        <Briefcase className={"me-3"} size={40}/>
                        <h3>Tìm kiếm công việc cho bạn...</h3>
                    </Col>
                    <FindJobForm>
                    </FindJobForm>
                    <Container className={""}>
                        <Row className={"justify-content-center p-3"}>
                            <h1 className={"text-center"}>
                                Các công ty tuyển dụng trên NICE JOB
                            </h1>
                        </Row>
                        <Stack direction={"horizontal"} gap={6} className={"justify-content-center"}>
                            <div className={"img_block"}><img src={onemountLogo} alt={"onemountLogo"}/></div>
                            <div className={"img_block"}><img src={fptLogo} alt={"fptLogo"}/></div>
                            <div className={"img_block"}><img src={tikiLogo} alt={"fptLogo"}/></div>
                            <div className={"img_block"}><img src={prudentialLogo} alt={"fptLogo"}/></div>
                            <div className={"img_block"}><img src={teachcombankLogo} alt={"fptLogo"}/></div>
                            <div className={"img_block"}><img src={viettelLogo} alt={"fptLogo"}/></div>
                        </Stack>
                    </Container>
                </Row>
                <Row>
                    <h1 className={"mt-3 mb-3 fs-3 text-center"}>Hãy đến với chúng tôi nếu bạn là:</h1>
                    <Row className={"text-center"}>
                        <Col>
                            <img src={company1} alt={"company1"}/>
                        </Col>
                        <Col>
                            <Row>
                                <h1 className={"fs-4"}>Nhà tuyển dụng</h1>
                                <p className={"fs-5 p-2"}>Bạn là nhà tuyển dụng và muốn tìm kiếm những nhân viên tiềm
                                    năng.</p>
                                <Button>Đăng tin tuyển dụng!</Button>
                            </Row>
                            <Row>
                                <h1>Người ứng tuyển</h1>
                                <p>Bạn là người ứng tuyển và muốn tìm công việc phù hợp.</p>
                                <Button>Tìm việc ngay</Button>
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>
    )
}
export default Home