import {Suspense} from 'react';
import {Await, NavLink} from '@remix-run/react';
import LOGO from '~/assets/Footer-logo.svg';

/**
 * @param {FooterProps}
 */
export function Footer({footer: footerPromise, header, publicStoreDomain}) {
  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => (
          <footer className="footer">
               <div className="footer-content">
              {/* Logo and Address Section */}
              <FooterLogoAddress
                logoUrl={LOGO}
                address="611 Hundred Oaks Drive STE 140 Edmond, OK 73013"
              /></div>


             <div className='footer-map'>
                <img src="https://cdn.shopify.com/s/files/1/0584/8688/2388/files/map.webp?v=1734591783" alt='Address'/>
              </div>
            {footer?.menu && header.shop.primaryDomain?.url && (
              <FooterMenu
                menu={footer.menu}
                primaryDomainUrl={header.shop.primaryDomain.url}
                publicStoreDomain={publicStoreDomain}
              />
)}
          </footer>
        )}
      </Await>
    </Suspense>
  );
}


/**
 * @param {{
 *   menu: FooterQuery['menu'];
 *   primaryDomainUrl: FooterProps['header']['shop']['primaryDomain']['url'];
 *   publicStoreDomain: string;
 * }}
 */
function FooterMenu({menu, primaryDomainUrl, publicStoreDomain}) {
  return (
    <nav className="footer-menu" role="navigation">
      {(menu || FALLBACK_FOOTER_MENU).items.map((item, index) => {  
        {/* {(menu?.items || []).map((item, index) => { */}
        if (!item.url) return null;
        // if the url is internal, we strip the domain
 

                 // URL modify karna hai specific indexes ke liye
    //       let customUrl = item.url;

          if (index === 1) item.url = "/aboutus";
          if (index === 3) item.url = "/faq"; // 3rd item
          if (index === 4) item.url = "/aboutus"; // 4th item
          if (index === 5) item.url = "/seagatecustomers"; // 6th item

        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;
       
    // const url = customUrl.includes('myshopify.com') || 
    // customUrl.includes(publicStoreDomain) || 
    // customUrl.includes(primaryDomainUrl)

    // ? new URL(customUrl).pathname

    // : customUrl;

       // Check if URL is external or internal
        const isExternal = !url.startsWith('/');
        return isExternal ? (
          <a href={url} key={item.id} rel="noopener noreferrer" target="_blank">
            {item.title}
          </a>
        ) : (
          <NavLink
            end
            key={item.id}
            prefetch="intent"
            style={activeLinkStyle}
            to={url}
          >
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}


const FALLBACK_FOOTER_MENU = {
  id: 'gid://shopify/Menu/199655620664',
  items: [
    {
      id: 'gid://shopify/MenuItem/461633060920',
      resourceId: 'gid://shopify/ShopPolicy/23358046264',
      tags: [],
      title: 'Privacy Policy',
      type: 'SHOP_POLICY',
      url: '/policies/privacy-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633093688',
      resourceId: 'gid://shopify/ShopPolicy/23358013496',
      tags: [],
      title: 'Refund Policy',
      type: 'SHOP_POLICY',
      url: '/policies/refund-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633126456',
      resourceId: 'gid://shopify/ShopPolicy/23358111800',
      tags: [],
      title: 'Shipping Policy',
      type: 'SHOP_POLICY',
      url: '/policies/shipping-policy',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461633159224',
      resourceId: 'gid://shopify/ShopPolicy/23358079032',
      tags: [],
      title: 'Terms of Service',
      type: 'SHOP_POLICY',
      url: '/policies/terms-of-service',
      items: [],
    },
  ],
};


// function FooterMenu({menu, primaryDomainUrl, publicStoreDomain}) {
//   return (
//     <nav className="footer-menu" role="navigation">
//       {(menu || FALLBACK_FOOTER_MENU).items.map((item) => {
//         if (!item.url) return null;
//         // if the url is internal, we strip the domain
//         const url =
//           item.url.includes('myshopify.com') ||
//           item.url.includes(publicStoreDomain) ||
//           item.url.includes(primaryDomainUrl)
//             ? new URL(item.url).pathname
//             : item.url;
//         const isExternal = !url.startsWith('/');
//         return isExternal ? (
//           <a href={url} key={item.id} rel="noopener noreferrer" target="_blank">
//             {item.title}
//           </a>
//         ) : (
//           <NavLink
//             end
//             key={item.id}
//             prefetch="intent"
//             style={activeLinkStyle}
//             to={url}
//           >
//             {item.title}
//           </NavLink>
//         );
//       })}
//     </nav>
//   );
// }


function FooterLogoAddress({ logoUrl, address }) {
  return (
    <div className="footer-logo-address text-white">
      {/* Logo Section */}
      <div className="footer-logo">
      <a href="/">
        <img src={logoUrl} alt="Company Logo" className="footer-logo-image" />
        <h4 className="footer-address-title text-white font-medium  text-lg tracking-widest py-6">ATP DATA SERVICES</h4>
        </a>
      </div>


      {/* Address Section */}
      <div className="footer-address">
        <p className="footer-address-text text-white text-sm">{address}</p>
        <a href='#' className='foot-email text-sm'><span>info@dataservices.com</span></a>
      </div>
    </div>
  );
}

//   {
//     columnTitle: "Quick Links",
//     items: [
//       { id: '1', title: 'All Products', url: '/' },
//       { id: '2', title: 'Contact Us', url: '/contact' },
//       { id: '3', title: 'FAQ', url: '/faq' },
//       { id: '4', title: 'Seagate Customers', url: '/' },
//       { id: '5', title: 'Blog', url: '/blog' },
//       { id: '6', title: 'Privacy Policy', url: '/policies/privacy-policy' },
//       { id: '7', title: 'Terms of Service', url: '/policies/terms-of-service' },
//     ],
//   },
  // {
  //   columnTitle: "Support",
  //   items: [
  //     { id: '4', title: 'Contact', url: '/contact' },
  //     { id: '5', title: 'FAQ', url: '/faq' },
  //     { id: '6', title: 'Shipping Policy', url: '/policies/shipping-policy' },
  //   ],
  // },
  // {
  //   columnTitle: "Legal",
  //   items: [
  //     { id: '7', title: 'Privacy Policy', url: '/policies/privacy-policy' },
  //     { id: '8', title: 'Terms of Service', url: '/policies/terms-of-service' },
  //   ],
  // },
// ];


/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'medium' : undefined,
    color: isPending ? 'grey' : 'white',
  };
}


/**
 * @typedef {Object} FooterProps
 * @property {Promise<FooterQuery|null>} footer
 * @property {HeaderQuery} header
 * @property {string} publicStoreDomain
 */


/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
