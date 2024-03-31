import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

function HeaderAndFooterExample() {
  return (
    <>
    <Form.Label>Insérer une offre ou un coupon</Form.Label>
    <Form.Control type="text" placeholder="Entrez l'offre ou le coupon" />
    <Card className="text-center">
      <Card.Header>Offres et Coupons</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Utiliser</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    </>
  );
}

export default HeaderAndFooterExample;