

import Header from '../components/Header';
import Footer from '../components/Footer';

import BotonWhatsApp from '../components/BotonWhatsApp';

function MainLayuot({children}) {
  return (
    <div>
 <Header />
  <main className="flex-1">{children}</main>

<BotonWhatsApp />
<Footer />

    </div>
  )
}

export default MainLayuot