import React,{  useState } from 'react';
import { ILaunch } from '../../models/Launch.type';
import { Image , Container, Row ,Button , Offcanvas, Carousel} from 'react-bootstrap';
import LaunchService from '../../services/LaunchService';

type Props={
  data:ILaunch
}

function LaunchDetailModal(props:Props) {
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState({} as ILaunch);
  const {data}=props;
  const handleClose = () => setShow(false);
  const handleShow = () => {setShow(true);getLaunchDetails()};
  const getLaunchDetails =()=>{
    LaunchService.get(data.flight_Number)
    .then((response:any)=>{
      setDetails(response.data);
    })
    .catch((e: Error) => {
    console.log(e);
  });
}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Details
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{details.mission_Name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        { details['mission_Name'] !== undefined && 
          <Container>
          <Row>
              
              <Carousel fade={true} controls={false} interval={1000} data-bs-theme="dark">
                {
                  details.links.flickr_Images.map((image)=>{
                    return(
                      <Carousel.Item>
                    <Image
                              src={image}
                              width={'350px'}
                              height={'300px'}
                              className="card-img-top"
                            />
                    <Carousel.Caption>
                      <p>{data.mission_Name}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                    )
                  })
  
                }                
              </Carousel>
              </Row>
            <Row>
                
                <table >
                  <tr>
                    <th>Flight Number:</th>
                    <td>{details.flight_Number}</td>
                  </tr>
                  <tr>
                    <th>Launch Year:</th>
                    <td>{details.launch_Year}</td>
                  </tr>
                  <tr>
                    <th>Site Name:</th>
                    <td>{details.launch_Site.site_Name_Long}</td>
                  </tr>
                  <tr>
                    <th>Details:</th>
                    <td>{details.details}</td>
                  </tr>
                  <tr>
                    <th>Reference Websites:</th>
                    <td><a href={details.links.wikipedia}  target="_blank">Wikipedia</a>, <a href={details.links.video_Link}  target="_blank">Youtube</a></td>
                  </tr>                  
                </table>                  
            </Row>
            
          </Container>
        
        
        }
        </Offcanvas.Body>
      </Offcanvas>      
    </>
  );
}

export default LaunchDetailModal;