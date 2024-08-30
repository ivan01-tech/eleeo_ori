import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcDiscover } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#455a64', color: '#fff', padding: '40px 0' }}>
      <Container>
        <Row>
          <Col md={3}>
            <h5 style={{ color: '#11a683' }}>Eleeo</h5>
            <p style={{ color: '#f0a500' }}>Produits frais</p>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Votre Email" />
              </Form.Group>
              <Button variant="success" type="submit">
                S'abonner maintenant
              </Button>
            </Form>
          </Col>
          <Col md={3}>
            <h5>Pourquoi les gens nous aiment !</h5>
            <p>
              Nous avons des produits de qualité et des prestataires qualifiés expérimentés.
              Nous sommes et nos produits sont beaux à voir et agréables à goûter.
            </p>
            <Button variant="warning">Lire plus</Button>
          </Col>
          <Col md={2}>
            <h5>Informations sur la boutique</h5>
            <ul className="list-unstyled">
              <li><Link to="/about" style={{ color: '#fff' }}>À propos de nous</Link></li>
              <li><Link to="/contact" style={{ color: '#fff' }}>Contactez-nous</Link></li>
              <li><Link to="/privacy-policy" style={{ color: '#fff' }}>Politique de confidentialité</Link></li>
              <li><Link to="/terms-conditions" style={{ color: '#fff' }}>Termes & Conditions</Link></li>
              <li><Link to="/return-policy" style={{ color: '#fff' }}>Politique de retour</Link></li>
              <li><Link to="/faq" style={{ color: '#fff' }}>FAQ & Aide</Link></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Compte</h5>
            <ul className="list-unstyled">
              <li><Link to="/account" style={{ color: '#fff' }}>Mon compte</Link></li>
              <li><Link to="/order-detail" style={{ color: '#fff' }}>Détail d'achat</Link></li>
              <li><Link to="/cart" style={{ color: '#fff' }}>Panier d'achat</Link></li>
              <li><Link to="/wishlist" style={{ color: '#fff' }}>Liste de souhaits</Link></li>
              <li><Link to="/order-history" style={{ color: '#fff' }}>Historique des commandes</Link></li>
              <li><Link to="/international-orders" style={{ color: '#fff' }}>Commandes internationales</Link></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Contact</h5>
            <p>Adresse : Ange Raphaël / Douala</p>
            <p>Email : Exemple@gmail.com</p>
            <p>Téléphone : +0123 4567 8910</p>
            <h6>Paiement accepté</h6>
            <div>
              <FaCcVisa style={{ color: '#fff', marginRight: '10px' }} />
              <FaCcMastercard style={{ color: '#fff', marginRight: '10px' }} />
              <FaCcPaypal style={{ color: '#fff', marginRight: '10px' }} />
              <FaCcDiscover style={{ color: '#fff' }} />
            </div>
            <div className="social-icons mt-3">
              <a href="https://twitter.com"><FaTwitter style={{ color: '#fff', marginRight: '15px' }} /></a>
              <a href="https://facebook.com"><FaFacebookF style={{ color: '#fff', marginRight: '15px' }} /></a>
              <a href="https://youtube.com"><FaYoutube style={{ color: '#fff', marginRight: '15px' }} /></a>
              <a href="https://linkedin.com"><FaLinkedinIn style={{ color: '#fff' }} /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
