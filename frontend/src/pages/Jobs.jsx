import './Jobs.css'
import NavbarCustom from "../components/Navbar.jsx";
import {Container, Form, Row} from "react-bootstrap";
import FindJobForm from "../components/FindJobForm.jsx";
import JobCard from "../components/JobCard.jsx";

function Jobs() {
    return (
        <>
            <Container>
                <h1 className={"fs-3 mt-3 mb-1"}>Nhập tên công việc bạn muốn tìm kiếm...</h1>
                <FindJobForm></FindJobForm>
                <p className={"fs-3 mt-3 mb-3"}>Tin tuyển dụng mới nhất</p>
                <Row className={""}>
                    <JobCard></JobCard>
                    <JobCard></JobCard>
                    <JobCard></JobCard>
                    <JobCard></JobCard>
                    <JobCard></JobCard>
                    <JobCard></JobCard>
                    <JobCard></JobCard>
                </Row>
            </Container>
        </>
    )
}

export default Jobs