import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

let _hsq = (window._hsq = window._hsq || []);

class HubSpot extends PureComponent {
  componentDidMount() {
    this.loadScript();
    this.sendPageView(window.location);
    this.props.history.listen(this.sendPageView);
  }

  loadScript = () => {
    const script = document.createElement('script');
    script.src = 'https://js.hs-scripts.com/9453709.js';
    script.async = true;
    script.defer = true;
    script.id = 'hs-script-loader';
    document.body.appendChild(script);
  };

  sendPageView = (location) => {
    setTimeout(() => {
      console.log('hubspot data ->', location.pathname, document.title);
      _hsq.push(['setPath', location.pathname]);
      _hsq.push(['trackPageView']);
    }, 500);
  };

  render() {
    return null;
  }
}

export const getHutk = () => document.cookie.replace(/(?:^|.*;\s*)hubspotutk\s*=\s*([^;]*).*$|^.*$/, '$1');

export default withRouter(HubSpot);
