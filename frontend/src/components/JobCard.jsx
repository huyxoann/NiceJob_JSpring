import {Card, Col, Row} from "react-bootstrap";
import company1 from "../assets/images/company2.jpg";
import './JobCard.css'
import Tags from "./Tags.jsx";

function JobCard({job_name, corp_name, img_url}) {
    const tags = ["Hanoi", "15 Triệu"];
    return (
        <Card className={"w-25"}>
            <a>
                <Card.Body>
                    <Card.Img src={img_url}></Card.Img>
                    <Card.Title>{job_name}</Card.Title>
                    <Card.Text>{corp_name}</Card.Text>
                    <div className={"mt-2"}>
                        {tags.map((tag)=>(
                            <Tags content={tag}></Tags>
                        ))}
                    </div>

                </Card.Body>
            </a>

        </Card>

    )
}

export default JobCard