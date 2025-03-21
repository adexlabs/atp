import {Suspense} from 'react';
import {Await, NavLink, useAsyncValue} from '@remix-run/react';
import {useAnalytics, useOptimisticCart} from '@shopify/hydrogen';
import {useAside} from '~/components/Aside';
import searchIcon from '~/assets/searchLogo.svg';
import userIcon from '~/assets/account.svg';
import cartIcon from '~/assets/cart.svg';
import close_Icon from '~/assets/closeIcon.svg';
/**
 * @param {HeaderProps}
 */

export function Header({header, isLoggedIn, cart, publicStoreDomain}) {
 
  const {shop, menu} = header;
  return (
    <header className="header page-width custom-header">
    <HeaderMenu
        menu={menu}
        viewport="desktop"
        primaryDomainUrl={header.shop.primaryDomain.url}
        publicStoreDomain={publicStoreDomain}
      />
      <div className='order-2'>
      <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
        <div className='header-main-logo'>
        <img src="https://cdn.shopify.com/s/files/1/0584/8688/2388/files/atp-logo.png?v=1721229325"/>
        </div>
      </NavLink>
      </div>
      <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
    </header>
  );
}


/**
 * @param {{
 *   menu: HeaderProps['header']['menu'];
 *   primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
 *   viewport: Viewport;
 *   publicStoreDomain: HeaderProps['publicStoreDomain'];
 * }}
 */
export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}) {
  const className = `header-menu-${viewport}`;
  const {close} = useAside();


  return (
    <nav className={className} role="navigation">
      {viewport === 'mobile' && (
        <NavLink
          end
          onClick={close}
          prefetch="intent"
          style={activeLinkStyle}
          to="/"
        >
          Home
        </NavLink>
      )}
        {/* {(menu || FALLBACK_HEADER_MENU).items.map((item)=>{ */}
       {(menu || FALLBACK_HEADER_MENU).items.map((item, index) => {
        if (!item.url) return null;

        // if the url is internal, we strip the domain
        const url =
          item.url.includes('myshopify.com') ||
          item.url.includes(publicStoreDomain) ||
          item.url.includes(primaryDomainUrl)
            ? new URL(item.url).pathname
            : item.url;

            
            // if (index === 0) {
            //   item.url = "/seagate";
            //   item.title = "Service Pricing";
            // } else if (index === 1) {
            //   item.url = "/aboutus";
            //   item.title = "ABOUT";
            // } else if (index === 2) {
            //   item.url = "/faq";
            //   item.title = "FAQ";
            // }

            if (index === 0) {
              item.url = "/faq";
                item.title = "FAQ";
              }

              
        return (
          <NavLink
            className="header-menu-item"
            end
            key={item.id}
            onClick={close}
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


/**
 * @param {Pick<HeaderProps, 'isLoggedIn' | 'cart'>}
 */
function HeaderCtas({isLoggedIn, cart}) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      {/* <NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
        <Suspense fallback="Sign in">
          <Await resolve={isLoggedIn} errorElement="Sign in">
            {(isLoggedIn) => (isLoggedIn ? 'Account' : <img
      src={userIcon}
      alt="Sign In"
      width="24"
      height="24"
    />)}
          </Await>
        </Suspense>
      </NavLink> */}

<NavLink prefetch="intent" to="/account" style={activeLinkStyle}>
  <Suspense fallback="Sign in">
    <Await resolve={isLoggedIn} errorElement="Sign in">
      {(isLoggedIn) => (
        isLoggedIn ? (
          'Account'
        ) : (
          <img
            src={userIcon}
            alt="Sign In"
            width="24"
            height="24"
            style={{ cursor: 'pointer' }}
          />
        )
      )}
    </Await>
  </Suspense>
</NavLink>

      <SearchToggle />
 
      <CartToggle cart={cart} />
   
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  const {open} = useAside();
  return (
    <button
      className="header-menu-mobile-toggle reset"
      onClick={() => open('mobile')}
    >
      <h3>☰</h3>
    </button>
  );
}


function SearchToggle() {
  const {open} = useAside();
  return (
    <button className="reset" onClick={() => open('search')}>
     <img src={searchIcon} alt='Search' className='search-icon'/>
    </button>
  );
}


/**
 * @param {{count: number | null}}
 */
function CartBadge({count}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();


  return (
    <a className='cart-icon'
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        });
      }}
    >
      <img className='cart-icon-img' src={cartIcon} alt='Cart'/>
      <p className='cart-count'>{count === null ? <span>&nbsp;</span> : count}</p>
    </a>
  );
}


/**
 * @param {Pick<HeaderProps, 'cart'>}
 */
function CartToggle({cart}) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}


function CartBanner() {
  const originalCart = useAsyncValue();
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
}


const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/461609500728',
      resourceId: null,
      tags: [],
      title: 'Collections',
      type: 'HTTP',
      url: '/collections',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609533496',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609566264',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/461609599032',
      resourceId: 'gid://shopify/Page/92591030328',
      tags: [],
      title: 'About',
      type: 'PAGE',
      url: '/pages/about',
      items: [],
    }
  ],
};


/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}


/** @typedef {'desktop' | 'mobile'} Viewport */
/**
 * @typedef {Object} HeaderProps
 * @property {HeaderQuery} header
 * @property {Promise<CartApiQueryFragment|null>} cart
 * @property {Promise<boolean>} isLoggedIn
 * @property {string} publicStoreDomain
 */


/** @typedef {import('@shopify/hydrogen').CartViewPayload} CartViewPayload */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
