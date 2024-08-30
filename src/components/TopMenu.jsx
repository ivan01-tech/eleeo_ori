import { Link } from "react-router-dom";

const MenuHaut = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          E-Commerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Basculer la navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button
                className="btn nav-link dropdown-toggle fw-bold"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-expanded="false"
                data-bs-toggle="dropdown"
              >
                Toutes les Pages
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/account/signin">
                    Connexion
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/signup">
                    Inscription
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/checkout">
                    Page de Paiement
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact-us">
                    Contactez-nous
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/blog/detail">
                    Détail du Blog
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/fsafasf">
                    Page 404 Introuvable
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/500">
                    Erreur Serveur Interne 500
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Mode
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Supermarché
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Électronique
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Meubles
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Jardin & Plein air
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category">
                Bijoux
              </Link>
            </li>
        
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MenuHaut;
