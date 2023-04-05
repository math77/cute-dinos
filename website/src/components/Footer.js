import './Navbar.css';


function Footer() {

  return (
    <footer className="footer" style={{ backgroundColor: 'transparent', padding: '5px' }}>
      {/*
      <div className="content has-text-centered">
        <p className="is-size-5 mt-2">
          <a href="https://twitter.com/towncocompany" style={{ color: '#ffffff', fontWeight: '700' }} target="_blank" rel="noreferrer">
            Modern Dinos
          </a>
        </p>
        <a className="is-size-6" href="https://www.stacks.co/" style={{ color: '#ffffff', fontWeight: '700' }}>Build on Stacks</a>
        
      </div>
      */}
      <div className="content has-text-centered">
        <p xmlnsDct="http://purl.org/dc/terms/" xmlnsVcard="http://www.w3.org/2001/vcard-rdf/3.0#">
          <a rel="license"
             href="http://creativecommons.org/publicdomain/zero/1.0/">
            <img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" style={{ borderStyle: 'none'}} alt="CC0" />
          </a>
          <br />
          To the extent possible under law,
          <a rel="dct:publisher"
             href="https://www.moderndinos.xyz/">
            <span property="dct:title" style={{ color: '#7299E8' }}> Dr. Dinoshi Nakasaur </span></a>
          has waived all copyright and related or neighboring rights to
          <span property="dct:title"> Modern Dinos</span>.
        This work is published from:
        <span property="vcard:Country" datatype="dct:ISO3166"
              content="US" about="https://www.moderndinos.xyz/">
          United States</span>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
