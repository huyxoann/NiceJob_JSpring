import {Button, Col, Collapse, Form, Row} from "react-bootstrap";
import {useState} from "react";

function FindJobForm() {
    const [open, setOpen] = useState(false);
    return (
        <Form method={"get"}>
            <Form.Group className={"d-flex justify-content-center p-3"}>
                <Col className=""></Col>

                <Col className={"me-3"}>
                    <a onClick={() => setOpen(true)}
                       aria-controls="menu"
                       aria-expanded={open}
                       className={""}>
                        <Form.Control type={"text"}
                                      placeholder={"Nhập công việc bạn muốn ứng tuyển..."}>
                        </Form.Control>
                    </a>
                </Col>
                <Col className={"align-content-center"}>
                    <Button>Tìm việc ngay</Button>
                </Col>
                <Col className=""></Col>

            </Form.Group>
            <Collapse in={open}>
                <Row id={"menu"} className={"justify-content-center"}>
                    <Col className=""></Col>
                    <Col className="select">
                        <Row className="form-group">
                            <Form.Select name="career" className="form-control select">
                                <option value="0">Tất cả ngành nghề</option>
                            </Form.Select>
                        </Row>
                        <Row className="form-group">
                            <Form.Select name="salary" className="form-control select">
                                <option value="0">Tất cả mức lương</option>
                            </Form.Select>
                        </Row>
                        <Row className="form-group">
                            <Form.Select name="way_to_work" className="form-control select">
                                <option value="0">Tất cả hình thức làm việc</option>
                            </Form.Select>
                        </Row>
                    </Col>
                    <Col className="select">
                        <Row className="form-group">
                            <Form.Select name="province" className="form-control select">
                                <option value="0">Tất cả địa điểm</option>
                            </Form.Select>
                        </Row>
                        <Row className="form-group">
                            <Form.Select name="level" className="form-control select">
                                <option value="0">Tất cả cấp bậc</option>
                            </Form.Select>
                        </Row>
                    </Col>
                    <Col className=""></Col>
                </Row>

            </Collapse>
        </Form>
    )
}

export default FindJobForm