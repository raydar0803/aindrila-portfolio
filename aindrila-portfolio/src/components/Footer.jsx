export function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer style ={{display: "flex", width: '100vw', justifyContent: 'space-around'}}className="footer">
        <div className="footer-inner">
          <p className="footer-text">
            © {year}   Aindrila Ray 
          </p>
        </div>
      </footer>
    );
  }
  