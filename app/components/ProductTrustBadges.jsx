// import React from 'react';
// import favicon1 from '~/assets/turst-img-1.svg';
// import favicon2 from '~/assets/trust-img-2.svg';
// import favicon3 from '~/assets/trust-img-3.svg';
// import favicon4 from '~/assets/trust-img-4.svg';
// import favicon5 from '~/assets/trust-img-5.svg';
// import favicon6 from '~/assets/trust-img-6.svg';
// export default function ProductTrustBadges (){
// const badges = [
//   {
//     src: favicon1,
//     alt: 'SSL Secured',
//     text: 'Special Rate',
//     para: "As an exclusive data recovery services partner for Seagate, we have negotiated special rates for Seagate customers!  When you submit your case via the online form, please make sure you enter the promo code the Seagate customer service agent provided you with for Seagate hard disk drives that are out of warranty."
//   },
//   {
//     src: favicon2,
//     alt: 'PayPal Accepted',
//     text: 'Expertise You Can Trust',
//     para: "Our team members were once part of the in-house data recovery services at Seagate.  We have years of close relationships working alongside Seagate's hard disk drive's design, research and development organizations so we understand every aspect of a Seagate hard disk drive." },
//   {
//     src: favicon3,
//     alt: 'Privacy Protection',
//     text: 'Best Recovery Success Rate',
//     para: "Thanks to our long-standing, close relationship with Seagate, we have access to the latest and greatest firmware and tools to repair your Seagate hard disk drive so that we can successfully recover the data that is stored on it.  No one else in the industry has this access."
 
//   },
//   {
//     src: favicon4,
//     alt: 'Visa & Mastercard Accepted',
//     text: 'Money Back Guaranteed',
//     para: "Besides providing you with upfront, flat-rate pricing, no matter how many terabytes you need recovered, we will give you a full refund should your data recovery service be unsuccessful.  That's extra peace of mind that we will do our best to recover your data."
//   },
//   {
//     src: favicon5,
//     alt: 'Privacy Protection',
//     text: 'We Make It Easy',
//     para: "We understand that losing your data is stressful enough so we make it easy for you to go through the process of recovering your data.  Take a vacation, we'll keep you posted via email throughout the whole process so you won't miss a beat no matter where you are in the world."
 
//   },
//   {
//     src: favicon6,
//     alt: 'Visa & Mastercard Accepted',
//     text: 'We Keep It Secure',
//     para: "Your data privacy is most important to us.  We take every measure to keep your data safe from the time it enters our data recovery lab to the time we ship the recovered data back to you, safely encrypted."}
// ];


//   return (
//     <>
      
//       <div className="badges">
//         {/* <h3>Trusted by Thousands of Customers</h3> */}
//         <div className="badges-wrapper">
//           {/* Map through the badges array and render each image */}
//           {badges.map((badge, index) => (
//             <div key={index} className="product-badge-wrapper">
//               <img
//                 src={badge.src}
//                 alt={badge.alt}
//                 className="badge-img"
//               />
//               <span className="product-badge-text">{badge.text}</span>
//               <p className='badge-para'>{badge.para}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }



import React from "react";
import favicon1 from '~/assets/turst-img-1.svg';

// Define SVG icons manually
const Icon1 = () => (
  <svg preserveAspectRatio="xMidYMid meet" data-bbox="20.5 20 159.002 160" viewBox="20.5 20 159.002 160" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
   
    <g>
        <path d="m123.25 177.081 52.686-48.661c-1.941-2.137-2.689-5.007-2.342-7.935.351-2.93 1.781-5.901 4.253-8.232l-5.562-6.01-5.615-5.959c-.932-.997-1.881-1.977-2.825-2.962l-2.835-2.953c-1.882-1.976-3.799-3.918-5.704-5.871a1072.443 1072.443 0 0 0-23.254-23.039 1070.216 1070.216 0 0 0-23.968-22.274c-2.028-1.822-4.046-3.655-6.096-5.452l-3.064-2.707c-1.022-.901-2.04-1.808-3.073-2.698l-6.178-5.357-6.225-5.301c-2.163 2.628-5.013 4.236-7.881 4.751-2.866.51-5.736-.091-7.947-1.938L22.531 80.434c2.056 1.719 3.05 4.346 2.98 7.193-.065 2.844-1.208 5.926-3.37 8.551l5.646 4.806 5.602 4.859c.937.806 1.859 1.629 2.786 2.447l2.779 2.455c1.86 1.629 3.689 3.293 5.529 4.945a973.442 973.442 0 0 1 21.739 20.202 977.664 977.664 0 0 1 21.09 20.896c1.728 1.771 3.467 3.532 5.173 5.325l2.571 2.678c.856.893 1.718 1.782 2.563 2.686l5.093 5.404 5.043 5.451c2.47-2.33 5.445-3.654 8.244-3.874 2.802-.227 5.445.636 7.251 2.623z" fill="#FFFFFF" data-color="1"></path>
        <path d="m107.698 180-5.857-6.329-5.085-5.396c-.657-.703-1.32-1.393-1.983-2.083l-3.143-3.274c-1.271-1.336-2.557-2.649-3.843-3.964l-1.324-1.354A982.114 982.114 0 0 0 65.4 136.731a976.95 976.95 0 0 0-21.712-20.176l-1.389-1.25c-1.37-1.234-2.74-2.469-4.128-3.684l-3.451-3.049c-.699-.618-1.398-1.237-2.106-1.845l-5.606-4.862-6.508-5.543.727-.883c1.94-2.356 3.042-5.14 3.105-7.839.064-2.612-.846-4.839-2.562-6.273l-.878-.734 46.561-57.781.927.775c1.86 1.554 4.337 2.153 6.977 1.681 2.725-.489 5.274-2.03 7.175-4.338l.766-.93 7.144 6.083 6.186 5.364c.792.682 1.578 1.377 2.364 2.072l3.781 3.34c1.574 1.381 3.155 2.805 4.685 4.183l1.418 1.276a1075.89 1075.89 0 0 1 23.996 22.3 1081.95 1081.95 0 0 1 23.281 23.065l1.347 1.378c1.437 1.469 2.924 2.989 4.369 4.505l3.54 3.688c.712.742 1.425 1.483 2.128 2.235l5.612 5.955 6.353 6.864-.839.791c-2.176 2.053-3.559 4.724-3.895 7.523-.322 2.716.406 5.207 2.047 7.015l.776.854-54.413 50.255-.804-.884c-1.5-1.65-3.733-2.445-6.278-2.241-2.643.208-5.315 1.471-7.526 3.555l-.872.824zM23.755 96.01l4.802 4.088 5.61 4.866c.712.613 1.42 1.238 2.128 1.864l3.446 3.044c1.391 1.22 2.77 2.461 4.148 3.703l1.387 1.249a984.135 984.135 0 0 1 21.767 20.227 984.763 984.763 0 0 1 21.116 20.922l1.323 1.353c1.293 1.322 2.587 2.644 3.862 3.984l3.138 3.269c.671.698 1.342 1.395 2.003 2.103l5.089 5.4 4.266 4.611c2.419-1.982 5.244-3.179 8.065-3.402 2.849-.226 5.421.539 7.36 2.176l51.065-47.163c-1.586-2.2-2.262-4.982-1.91-7.955.357-2.975 1.695-5.819 3.801-8.12l-4.808-5.196-5.608-5.951a234.402 234.402 0 0 0-2.109-2.216l-3.543-3.692c-1.438-1.509-2.918-3.022-4.35-4.486l-1.347-1.379a1077.008 1077.008 0 0 0-23.228-23.012 1073.333 1073.333 0 0 0-23.941-22.249l-1.419-1.277a489.356 489.356 0 0 0-4.665-4.165l-3.785-3.344c-.778-.688-1.556-1.376-2.343-2.054l-6.181-5.36-5.334-4.541c-2.153 2.242-4.878 3.74-7.785 4.262-2.91.521-5.689-.005-7.946-1.476L24.125 80.33c1.733 1.868 2.638 4.426 2.566 7.325-.066 2.869-1.1 5.798-2.936 8.355z" fill="#2C3A51" data-color="2"></path>
        <path d="M26.727 94.877c1.42-2.608 2.174-5.372 2.247-8.001.071-2.625-.554-5.098-1.856-7.14l40.888-50.401c2.34 1.009 4.978 1.242 7.605.782 2.624-.457 5.251-1.627 7.578-3.462 15.803 13.416 31.171 27.354 46.157 41.697 14.95 14.383 29.52 29.173 43.601 44.433-1.682 2.454-2.691 5.176-2.999 7.855-.311 2.683.063 5.339 1.184 7.652l-47.444 44.11c-2.083-1.206-4.553-1.704-7.137-1.49-2.587.217-5.27 1.13-7.762 2.708-12.87-13.951-26.195-27.471-39.862-40.623-13.703-13.112-27.752-25.857-42.2-38.12z" fill="#FFF7EB" data-color="3"></path>
        <path d="M57.547 81.361c-1.197-1.066-2.102-2.245-2.679-3.57-.58-1.322-.845-2.776-.791-4.356.153-3.182 1.521-6.348 4.084-9.418 2.543-3.045 5.402-4.899 8.514-5.496 1.563-.3 3.053-.256 4.458.13 1.403.389 2.734 1.105 3.945 2.184 1.753 1.549 2.792 2.904 3.173 4.139l.224.728-4.133 4.202-.589-1.395c-.459-1.084-1.294-2.167-2.482-3.216a6.147 6.147 0 0 0-1.045-.754 4.867 4.867 0 0 0-1.105-.451c-.756-.203-1.551-.211-2.397-.027-1.728.377-3.297 1.429-4.801 3.211-1.569 1.86-2.372 3.585-2.459 5.269-.055.864.072 1.65.387 2.37.317.719.818 1.377 1.506 1.988 1.216 1.074 2.373 1.694 3.442 1.845l1.689.238-3.728 4.902-.711-.085c-1.355-.159-2.826-.957-4.502-2.438z" fill="#FFFFFF" data-color="1"></path>
        <path d="M64.417 79.953c-1.256-.176-2.559-.86-3.911-2.055-.796-.708-1.383-1.486-1.753-2.346-.369-.86-.52-1.803-.455-2.827.103-1.989 1.039-4.041 2.816-6.151 1.708-2.029 3.568-3.266 5.585-3.707 1.009-.22 1.966-.211 2.871.026.906.237 1.759.702 2.55 1.406 1.298 1.147 2.207 2.332 2.724 3.553l2.277-2.319c-.323-1.049-1.288-2.284-2.893-3.702-1.102-.981-2.297-1.632-3.556-1.984-1.261-.35-2.595-.39-3.999-.12-2.81.54-5.372 2.206-7.701 4.988-2.356 2.815-3.597 5.657-3.733 8.514-.048 1.418.19 2.721.718 3.908.525 1.19 1.348 2.254 2.441 3.228 1.527 1.349 2.864 2.092 4.014 2.23l2.005-2.642z" fill="#FF8A91" data-color="4"></path>
        <path d="M78.392 94.876c2.701-.737 5.433-2.579 8.142-5.522 2.469-2.707 4.012-5.542 4.54-8.406.61-3.32-.27-6.095-2.601-8.231-2.367-2.149-5.192-2.741-8.359-1.771-2.725.84-5.332 2.691-7.763 5.491-2.594 2.988-4.121 5.957-4.552 8.823-.453 3.154.451 5.758 2.677 7.779 2.233 2.048 4.892 2.66 7.916 1.837zm7.248-13.833c-.376 1.647-1.307 3.306-2.762 4.933-1.481 1.657-3.023 2.767-4.579 3.304-1.611.557-2.904.36-3.957-.605-1.053-.966-1.393-2.239-1.016-3.935.346-1.631 1.261-3.306 2.725-4.974 1.449-1.652 2.977-2.761 4.556-3.296 1.613-.561 2.932-.369 4.001.612 1.07.981 1.409 2.28 1.032 3.961z" fill="#FFFFFF" data-color="1"></path>
        <path d="M80.246 72.114c-2.48.764-4.843 2.447-7.098 5.039-2.409 2.769-3.803 5.451-4.193 8.039-.4 2.783.401 5.059 2.39 6.868 1.995 1.829 4.317 2.375 6.978 1.649 2.444-.665 4.926-2.361 7.435-5.092 2.285-2.51 3.674-5.063 4.156-7.671.538-2.93-.235-5.351-2.307-7.25-2.107-1.913-4.573-2.435-7.361-1.582zm6.539 8.986c-.436 1.903-1.477 3.767-3.118 5.599-1.67 1.864-3.409 3.104-5.211 3.724-2.006.693-3.664.438-4.982-.769-1.319-1.206-1.756-2.84-1.291-4.937.401-1.893 1.423-3.784 3.071-5.668 1.634-1.867 3.358-3.112 5.178-3.729 2.007-.7 3.699-.447 5.043.782 1.343 1.231 1.781 2.899 1.31 4.998z" fill="#FF8A91" data-color="4"></path>
        <path d="M84.714 106.257c-1.448-1.386-2.267-3.056-2.417-4.992-.208-2.567.915-5.237 3.349-7.922l11.199-12.351 3.687 3.442-11.153 12.177c-.948 1.036-1.467 1.988-1.586 2.912l-.003.023c-.137.912.156 1.698.897 2.402.748.711 1.56.966 2.484.78.858-.178 1.782-.79 2.738-1.821l11.229-12.104c1.215 1.162 2.444 2.309 3.647 3.485l-11.398 12.163c-2.464 2.628-5.012 3.929-7.593 3.908-1.903-.002-3.613-.707-5.08-2.102z" fill="#FFFFFF" data-color="1"></path>
        <path d="m105.033 90.509-10.351 11.134c-1.184 1.273-2.358 2.029-3.521 2.269-1.271.255-2.39-.078-3.362-1.002s-1.359-2.027-1.174-3.3c.157-1.217.814-2.46 1.973-3.728L98.856 84.66l-2.098-1.959-10.332 11.37c-2.153 2.37-3.137 4.657-2.959 6.854a6.4 6.4 0 0 0 .635 2.355 7.03 7.03 0 0 0 1.499 2.015c1.304 1.24 2.785 1.858 4.448 1.86 2.207.021 4.401-1.126 6.572-3.447l10.491-11.22-2.079-1.979z" fill="#FF8A91" data-color="4"></path>
        <path d="m96.29 116.85 6.644-6.978.57.562c1.464 1.444 3.18 2.126 5.105 2.033l.023-.001c2.086-.142 4.057-1.149 5.849-3.001 1.863-1.925 2.843-3.891 2.907-5.85.096-1.859-.654-3.59-2.225-5.139-1.435-1.415-2.891-2.807-4.335-4.211l-18.065 19.168 3.527 3.417zm14.12-14.832.875.863c.806.794 1.022 1.582-.386 3.051-.95.992-1.53 1.029-1.9.969-.296-.044-.935-.272-2.021-1.278l3.432-3.605z" fill="#FFFFFF" data-color="1"></path>
        <path d="m94.418 113.217 2.014 1.95 6.636-6.986c.448.433.896.867 1.338 1.306 1.282 1.264 2.741 1.855 4.382 1.776 1.751-.119 3.394-.968 4.926-2.554 1.605-1.662 2.434-3.3 2.483-4.919.084-1.554-.563-3.011-1.938-4.368-1.173-1.161-2.368-2.3-3.551-3.452l-16.29 17.247zm16.118-12.898c.555.534 1.105 1.073 1.652 1.615 1.384 1.365 1.21 2.95-.523 4.753-1.057 1.101-2.075 1.57-3.053 1.41-.782-.114-1.724-.724-2.843-1.816l-.468-.453 5.235-5.509z" fill="#FF8A91" data-color="4"></path>
        <path d="M116.422 131.927c2.733-.584 5.572-2.286 8.431-5.071 2.615-2.571 4.294-5.305 4.979-8.138.788-3.282.059-6.103-2.154-8.363-2.257-2.267-5.039-3.022-8.254-2.226-2.763.686-5.472 2.398-8.049 5.06-2.75 2.84-4.427 5.715-5.014 8.556-.619 3.123.136 5.78 2.259 7.913 2.119 2.164 4.738 2.925 7.802 2.269zm7.98-13.415c-.464 1.625-1.483 3.229-3.022 4.774-1.568 1.573-3.167 2.597-4.749 3.047-1.638.468-2.917.198-3.919-.822-1.009-1.013-1.273-2.31-.807-3.981.433-1.61 1.437-3.232 2.987-4.817 1.536-1.57 3.12-2.593 4.726-3.04 1.643-.474 2.941-.202 3.966.828 1.018 1.036 1.284 2.353.818 4.011z" fill="#FFFFFF" data-color="1"></path>
        <path d="M119.491 109.302c-2.517.626-4.966 2.176-7.357 4.641-2.554 2.632-4.09 5.234-4.619 7.797-.547 2.755.123 5.08 2.022 6.987 1.895 1.934 4.182 2.61 6.878 2.032 2.475-.529 5.044-2.085 7.697-4.676 2.415-2.379 3.939-4.853 4.561-7.43.694-2.896.054-5.359-1.914-7.367-2.009-2.019-4.436-2.684-7.268-1.984zm6.051 9.33c-.537 1.876-1.677 3.681-3.414 5.42-1.767 1.769-3.57 2.912-5.402 3.432-2.04.582-3.68.234-4.933-1.042-1.262-1.267-1.602-2.931-1.028-4.997.502-1.869 1.624-3.7 3.371-5.491 1.732-1.775 3.52-2.923 5.369-3.438 2.044-.59 3.712-.237 4.997 1.054 1.277 1.3 1.623 2.993 1.04 5.062z" fill="#FF8A91" data-color="4"></path>
        <path d="M124.7 145.8c1.892-4.866 3.778-9.77 5.608-14.665l-10.115 9.908-3.385-3.527 18.715-18.517 3.289 3.427a1214.6 1214.6 0 0 1-5.663 15.018l10.384-10.038 3.441 3.657-19.017 18.2-3.257-3.463z" fill="#FFFFFF" data-color="1"></path>
        <path d="m145.289 131.174-1.952-2.072-12.992 12.533a1242.25 1242.25 0 0 0 7.099-18.748l-2.099-2.186-16.874 16.66 1.924 2.005 12.679-12.447a1234.138 1234.138 0 0 1-7.013 18.42l2.118 2.247 17.11-16.412z" fill="#FF8A91" data-color="4"></path>
        <path d="m108.108 66.066-1.038 2.275 1.478 1.544-2.282.038-1.232 2.195-.367-2.245-2.233-.18 2.048-1.434-.163-2.306c.551.45 1.102.901 1.647 1.358l2.142-1.245z" fill="#FF8A91" data-color="4"></path>
        <path d="m114.344 71.898-1.057 2.266 1.465 1.558-2.282.018-1.25 2.185-.347-2.249c-.743-.069-1.488-.133-2.236-.195l2.062-1.42-.146-2.306 1.64 1.368 2.151-1.225z" fill="#FF8A91" data-color="4"></path>
        <path fill="#FF8A91" d="m120.533 77.782-1.076 2.258 1.45 1.572-2.281-.003-1.268 2.174-.328-2.253-2.238-.209 2.073-1.402-.126-2.307 1.627 1.382 2.167-1.212z" data-color="4"></path>
        <path d="m126.668 83.724-1.09 2.244 1.437 1.584-2.28-.023-1.287 2.164c-.101-.753-.205-1.504-.313-2.251l-2.235-.229 2.085-1.384-.107-2.31 1.615 1.397 2.175-1.192z" fill="#FF8A91" data-color="4"></path>
        <path d="m132.755 89.716-1.109 2.235c.48.527.955 1.059 1.428 1.592l-2.282-.04-1.302 2.15-.299-2.25-2.233-.249 2.096-1.366-.087-2.311 1.602 1.412 2.186-1.173z" fill="#FF8A91" data-color="4"></path>
        <path d="m70.453 107.733-1.068 2.246 1.392 1.464-2.215.101-1.255 2.174-.295-2.178-2.161-.113 2.025-1.455-.096-2.244c.523.423 1.044.848 1.56 1.278l2.113-1.273z" fill="#FF8A91" data-color="4"></path>
        <path d="m76.346 113.244-1.087 2.237 1.379 1.477-2.215.081-1.273 2.163-.276-2.182c-.719-.046-1.441-.088-2.164-.127l2.04-1.441-.079-2.243 1.554 1.287 2.121-1.252z" fill="#FF8A91" data-color="4"></path>
        <path fill="#FF8A91" d="m82.193 118.804-1.106 2.228 1.366 1.49-2.215.062-1.291 2.152-.256-2.185-2.167-.141 2.051-1.423-.06-2.244 1.542 1.301 2.136-1.24z" data-color="4"></path>
        <path d="m87.99 124.418-1.12 2.215 1.353 1.502-2.214.042-1.309 2.142c-.078-.73-.158-1.458-.243-2.182l-2.165-.16 2.062-1.406-.041-2.245 1.531 1.315 2.146-1.223z" fill="#FF8A91" data-color="4"></path>
        <path d="m93.742 130.08-1.139 2.205c.452.499.899 1.003 1.345 1.509l-2.217.025-1.324 2.128-.229-2.18-2.163-.18 2.074-1.388-.021-2.247 1.519 1.329 2.155-1.201z" fill="#FF8A91" data-color="4"></path>
    </g>
</svg>
);

const Icon2 = () => (
  <svg preserveAspectRatio="xMidYMid meet" data-bbox="56.693 181.418 453.544 204.094" viewBox="56.693 181.418 453.544 204.094" height="566.929" width="566.929" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
  <g>
      <path d="M504.718 270.433c-122.003-118.687-320.504-118.687-442.507 0-3.553 3.458-5.518 8.08-5.518 13.004 0 4.961 1.965 9.584 5.518 13.041 61.002 59.344 141.128 89.034 221.254 89.034s160.252-29.691 221.254-89.034c3.553-3.458 5.518-8.08 5.518-13.041-.001-4.924-1.966-9.547-5.519-13.004zM283.54 356.798c-42.104 0-76.384-33.223-76.384-74.039s34.28-74.001 76.384-74.001 76.384 33.186 76.384 74.001-34.28 74.039-76.384 74.039zM86.816 283.474c34.469-31.645 75.099-53.368 118.035-65.169-15.08 17.439-24.151 39.913-24.151 64.455 0 25.406 9.713 48.632 25.776 66.334-43.541-11.688-84.775-33.599-119.66-65.62zm273.827 65.582c16.025-17.664 25.739-40.928 25.739-66.296 0-24.504-9.033-46.979-24.113-64.417 42.86 11.839 83.414 33.524 117.846 65.131-34.849 31.983-76.008 53.856-119.472 65.582z" fill="#333333" data-color="1"></path>
      <path d="M283.533 333.111c-28.178 0-51.104-22.537-51.104-50.239 0-27.699 22.926-50.236 51.104-50.236s51.104 22.537 51.104 50.236c0 27.702-22.926 50.239-51.104 50.239zm0-78.185c-15.887 0-28.813 12.536-28.813 27.945s12.926 27.948 28.813 27.948c15.888 0 28.812-12.539 28.812-27.948s-12.924-27.945-28.812-27.945z" fill="#333333" data-color="1"></path>
  </g>
</svg>
);

const Icon3 = () => (
  <svg preserveAspectRatio="xMidYMid meet" data-bbox="42 17.8 116.075 164.3" viewBox="42 17.8 116.075 164.3" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
  <g>
      <path d="M137.6 111h.6c7.8 0 13.3-7.9 10.7-15.4-1.7-4.9 0-10.4 4.3-13.4 6.5-4.6 6.5-14.4 0-19-4.2-3-6-8.4-4.3-13.4 2.6-7.5-2.9-15.4-10.7-15.4h-.6c-5 0-9.4-3.3-10.9-8.3-1.5-5.2-6.1-8.3-10.9-8.3-2.4 0-4.8.8-6.9 2.4-2 1.6-4.5 2.4-6.9 2.4-2.4 0-4.9-.8-6.9-2.4-2.1-1.6-4.5-2.4-6.9-2.4-4.8 0-9.4 3.1-10.9 8.3-1.4 4.9-5.9 8.3-10.9 8.3h-.6c-7.8 0-13.3 7.9-10.7 15.4 1.7 4.9 0 10.4-4.3 13.4-6.5 4.6-6.5 14.4 0 19 4.2 3 6 8.4 4.3 13.4-2.6 7.4 2.8 15.2 10.4 15.4L42 164.1l27.8-10.6 9.3 28.6 20.5-45.9 20.5 45.8 9.3-28.5 27.9 10.7L133 112c1.4-.6 3-1 4.6-1zm-76.9-7.7c-1.2-1.8-1.5-4-.8-6.1 2.4-7-.1-14.8-6.1-19C52 77 51 75 51 72.8s1-4.2 2.8-5.5c6-4.2 8.5-12 6.1-19-.7-2.1-.4-4.3.8-6.1 1.2-1.8 3.2-2.8 5.3-2.8h.6c7.1 0 13.4-4.8 15.5-11.8 1-3.3 3.9-4.8 6.3-4.8 1.4 0 2.8.5 3.9 1.4 2.8 2.2 6.3 3.4 9.8 3.4 3.5 0 7-1.2 9.8-3.4 1.2-.9 2.5-1.4 3.9-1.4 2.4 0 5.3 1.5 6.3 4.8 2 6.9 8.4 11.8 15.5 11.8h.6c2.1 0 4.1 1 5.3 2.8 1.2 1.8 1.5 4 .8 6.1-2.4 7 .1 14.8 6.1 19 1.8 1.3 2.8 3.3 2.8 5.5s-1 4.2-2.8 5.5c-6 4.2-8.5 12-6.1 19 .7 2.1.4 4.3-.8 6.1-1.2 1.8-3.2 2.8-5.3 2.8h-.6c-7.1 0-13.4 4.8-15.5 11.8-1 3.3-3.9 4.8-6.3 4.8-1.4 0-2.8-.5-3.9-1.4-2.8-2.2-6.3-3.4-9.8-3.4-3.5 0-7 1.2-9.8 3.4-1.2.9-2.5 1.4-3.9 1.4-2.4 0-5.3-1.5-6.3-4.8-2-6.9-8.4-11.8-15.5-11.8H66c-2.1-.1-4.1-1.1-5.3-2.9zM98 123.5l-1.4.6c.5-.2 1-.4 1.4-.6zm-18.2 45.1l-7-21.6-21.6 8.3 19.4-43.4-1.3-.6c3.8 1 7 3.9 8.2 7.9 1.5 5.2 6.1 8.3 10.9 8.3 2.2 0 4.4-.7 6.4-2.1l2.2 4.8-17.2 38.4zm46.6-21.5l-7 21.6L99 123.2c1-.3 2-.4 3-.4 2.4 0 4.9.8 6.9 2.4 2.1 1.6 4.5 2.4 6.9 2.4 4.8 0 9.4-3.1 10.9-8.3.5-1.7 1.3-3.1 2.4-4.4l18.8 40.4-21.5-8.2z" fill="#000505" data-color="1"></path>
      <path d="M94.5 93.2l3.6 3.2.1-.1.1.1 3.1-3.7 23.9-28.2 3.2-3.7-3.7-3.2-5.8-5.1-3.6-3.2-3.1 3.7-15.9 18.6-5.8-5.1-3.6-3.2-3.1 3.7-5 5.9-3.1 3.7 3.6 3.2 15.1 13.4zm-7.1-22.9l9.4 8.3 19-22.4 5.8 5.1-23.8 28.1-.1-.1-.1.1-15.1-13.2 4.9-5.9z" fill="#000505" data-color="1"></path>
      <path d="M102.1 114c22.3 0 40.5-18.5 40.5-41.2s-18.1-41.2-40.5-41.2S61.6 50 61.6 72.8 79.8 114 102.1 114zm0-77.6c19.7 0 35.7 16.3 35.7 36.3s-16 36.3-35.7 36.3c-19.7 0-35.7-16.3-35.7-36.3s16-36.3 35.7-36.3z" fill="#000505" data-color="1"></path>
  </g>
</svg>
);

const Icon4 = () => (
  <svg preserveAspectRatio="xMidYMid meet" data-bbox="65 29 69.999 142" viewBox="65 29 69.999 142" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
     
      <g>
          <path d="M108.655 128.344a3.71 3.71 0 0 0-.753-1.12c-.752-.783-1.746-1.196-2.873-1.196h-6.913v-8.239h5.149v3.018c0 .9.732 1.63 1.636 1.63h2.302c.904 0 1.636-.73 1.636-1.63v-4.558c0-1.029-.302-1.872-.885-2.491-.404-.439-.864-.753-1.361-.928-.437-.158-.931-.234-1.509-.234h-1.515v-2.474c0-.9-.732-1.63-1.636-1.63H99.51c-.904 0-1.636.73-1.636 1.63v2.474h-1.665c-1.434 0-2.31.605-2.793 1.113a3.625 3.625 0 0 0-1.024 2.539v11.47c0 1.026.301 1.868.935 2.542.75.746 1.726 1.139 2.822 1.139h7.117v9.234h-5.149v-2.775c0-.9-.732-1.63-1.636-1.63h-2.302c-.904 0-1.636.73-1.636 1.63v4.557c0 .499.061.928.191 1.318.144.428.386.83.715 1.192.372.412.835.712 1.379.892.444.149.926.22 1.472.22h1.574v2.534c0 .9.732 1.63 1.636 1.63h2.423c.904 0 1.636-.73 1.636-1.63v-2.534h1.604a4.46 4.46 0 0 0 1.475-.225 3.62 3.62 0 0 0 1.385-.893c.423-.45.928-1.249.928-2.504v-12.646a3.558 3.558 0 0 0-.306-1.425z" fill="#E98866" data-color="1"></path>
          <path d="M134.547 97.012l-17.625-30.418a3.383 3.383 0 0 0-2.927-1.684h-3.885c1.306-5.601 1.978-10.501 1.978-14.581C112.088 38.368 106.778 29 100 29s-12.088 9.368-12.088 21.329c0 4.552 1.036 9.634 2.453 14.581h-4.36a3.382 3.382 0 0 0-2.927 1.684L65.453 97.012A3.356 3.356 0 0 0 65 98.696v68.936A3.374 3.374 0 0 0 68.38 171h63.239a3.374 3.374 0 0 0 3.38-3.368V98.696a3.345 3.345 0 0 0-.452-1.684zM100 33.042c3.799 0 8.032 7.1 8.032 17.287 0 3.996-.704 8.895-2.086 14.581H94.585c-1.496-4.993-2.617-10.127-2.617-14.581.001-10.187 4.233-17.287 8.032-17.287zm.731 48.906c-.162-.428-.334-.879-.512-1.34 1.975.116 3.55 1.738 3.55 3.734a3.768 3.768 0 0 1-3.77 3.757 3.768 3.768 0 0 1-3.769-3.757c0-.614.163-1.186.426-1.698l.278.727a2.027 2.027 0 0 0 2.613 1.179 2.016 2.016 0 0 0 1.184-2.602zm27.508 82.315H71.761V99.599l16.196-27.952h4.562A230.151 230.151 0 0 0 95 78.35a7.774 7.774 0 0 0-2.826 5.993c0 4.3 3.51 7.799 7.826 7.799 4.315 0 7.826-3.499 7.826-7.799 0-4.3-3.511-7.799-7.826-7.799-.445 0-.879.046-1.304.117a246.714 246.714 0 0 1-1.872-5.015h15.219l16.196 27.952v64.665z" fill="#0E4828" data-color="2"></path>
      </g>
  </svg>
);

const Icon5 = () => (
  <svg preserveAspectRatio="xMidYMid meet" data-bbox="24.531 31 152.048 139" viewBox="24.531 31 152.048 139" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">


  <g>
      <path d="M130.6 147.5H36.7c-6 0-10.5-6.2-10.5-11.8s4.5-11.8 10.5-11.8h89.5l32.2-34.1c3.9-3.9 10.3-4 14.9-.1 4.2 4.2 4.4 10.9.4 15.3l-35.3 38.7c-2.5 2.6-5.2 3.8-7.8 3.8zM36.7 126c-4.8 0-8.5 5.2-8.5 9.8s3.7 9.8 8.5 9.8h93.9c2.6 0 4.9-1.7 6.4-3.1l35.3-38.7c3.2-3.5 3.1-9.1-.3-12.4-3.7-3.2-8.9-3.2-12.1 0l-32.5 34.4c-.2.2-.5.3-.7.3l-90-.1z" fill="#0071bc" data-color="1"></path>
      <path d="M146.6 168.7c-.3 0-.6-.2-.8-.4l-14.4-20.9c-.3-.5-.2-1.1.3-1.4.5-.3 1.1-.2 1.4.3l14.4 20.9c.3.5.2 1.1-.3 1.4-.2 0-.4.1-.6.1z" fill="#0071bc" data-color="1"></path>
      <path d="M25.6 168.7c-.2 0-.4-.1-.6-.2-.5-.3-.6-.9-.3-1.4l14.2-20.9c.3-.5.9-.6 1.4-.3s.6.9.3 1.4l-14.2 20.9c-.2.3-.5.5-.8.5z" fill="#0071bc" data-color="1"></path>
      <path d="M162.8 66.5H60.9c-.3 0-.7-.2-.8-.5s-.2-.6-.1-.9C69 44.4 89.4 31 111.9 31c22.8 0 43.2 13.4 51.9 34.1.1.3.1.7-.1.9-.2.3-.6.5-.9.5zm-100.3-2h98.8C152.6 45.3 133.4 33 111.9 33c-21.2 0-40.4 12.3-49.4 31.5z" fill="#0071bc" data-color="1"></path>
      <path d="M111.3 170c-.6 0-1-.4-1-1v-21.5c0-.6.4-1 1-1s1 .4 1 1V169c0 .6-.5 1-1 1z" fill="#0071bc" data-color="1"></path>
      <path d="M111.3 126c-.6 0-1-.4-1-1V66.7c0-.6.4-1 1-1s1 .4 1 1V125c0 .6-.5 1-1 1z" fill="#0071bc" data-color="1"></path>
      <path d="M128.4 65.9c-.5 0-.9-.3-1-.8-2.2-12.4-8.5-23.6-17.4-30.8-9 7.6-15.4 18.8-17.4 30.8-.1.5-.6.9-1.2.8-.5-.1-.9-.6-.8-1.2 2.2-12.8 9.1-24.6 18.8-32.5.4-.3.9-.3 1.2 0 9.6 7.5 16.5 19.3 18.8 32.5.1.5-.3 1.1-.8 1.2h-.2z" fill="#0071bc" data-color="1"></path>
  </g>
</svg>
);

const Icon6 = () => (
  <svg preserveAspectRatio="xMidYMid meet" data-bbox="34.999 19.999 130.002 160.001" viewBox="34.999 19.999 130.002 160.001" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-label="">
  
  <g>
      <path d="M161.176 149.524a3.816 3.816 0 0 1-3.824-3.81v-40.635c0-3.501-2.859-6.349-6.373-6.349H49.02c-3.514 0-6.373 2.848-6.373 6.349v40.635a3.817 3.817 0 0 1-3.824 3.81 3.816 3.816 0 0 1-3.824-3.81v-40.635c0-7.702 6.289-13.968 14.02-13.968H150.98c7.73 0 14.02 6.266 14.02 13.968v40.635a3.817 3.817 0 0 1-3.824 3.81z" fill="#112F5B" data-color="1"></path>
      <path d="M130.588 180H69.412c-2.112 0-3.824-1.705-3.824-3.81s1.712-3.81 3.824-3.81h61.176c2.112 0 3.824 1.705 3.824 3.81S132.7 180 130.588 180z" fill="#112F5B" data-color="1"></path>
      <path d="M145.882 98.73a3.816 3.816 0 0 1-3.824-3.81V64.444c0-2.104 1.712-3.81 3.824-3.81s3.824 1.705 3.824 3.81V94.92a3.816 3.816 0 0 1-3.824 3.81z" fill="#112F5B" data-color="1"></path>
      <path d="M105.098 27.619H94.902c-2.112 0-3.824-1.705-3.824-3.81S92.79 20 94.902 20h10.196c2.112 0 3.824 1.705 3.824 3.81s-1.712 3.809-3.824 3.809z" fill="#112F5B" data-color="1"></path>
      <path d="M54.118 98.73a3.816 3.816 0 0 1-3.824-3.81V64.444a3.817 3.817 0 0 1 3.824-3.81 3.816 3.816 0 0 1 3.824 3.81V94.92a3.817 3.817 0 0 1-3.824 3.81z" fill="#112F5B" data-color="1"></path>
      <path d="M54.118 68.254a3.816 3.816 0 0 1-3.824-3.81C50.294 39.938 70.305 20 94.902 20c2.112 0 3.824 1.705 3.824 3.81s-1.712 3.81-3.824 3.81c-20.38 0-36.961 16.52-36.961 36.825a3.815 3.815 0 0 1-3.823 3.809z" fill="#112F5B" data-color="1"></path>
      <path d="M145.882 68.254a3.816 3.816 0 0 1-3.824-3.81c0-20.306-16.581-36.825-36.961-36.825-2.112 0-3.824-1.705-3.824-3.81s1.712-3.81 3.824-3.81c24.597 0 44.608 19.938 44.608 44.444a3.815 3.815 0 0 1-3.823 3.811z" fill="#112F5B" data-color="1"></path>
      <path d="M100 149.524a3.816 3.816 0 0 1-3.824-3.81v-20.317c0-2.104 1.712-3.81 3.824-3.81s3.824 1.705 3.824 3.81v20.317a3.817 3.817 0 0 1-3.824 3.81z" fill="#112F5B" data-color="1"></path>
      <path d="M69.412 180C50.437 180 35 164.619 35 145.714a3.817 3.817 0 0 1 3.824-3.81 3.816 3.816 0 0 1 3.824 3.81c0 14.704 12.007 26.667 26.765 26.667 2.112 0 3.824 1.705 3.824 3.81S71.524 180 69.412 180z" fill="#112F5B" data-color="1"></path>
      <path d="M130.588 180c-2.112 0-3.824-1.705-3.824-3.81s1.712-3.81 3.824-3.81c14.758 0 26.765-11.962 26.765-26.667a3.817 3.817 0 0 1 3.824-3.81 3.816 3.816 0 0 1 3.824 3.81C165 164.619 149.563 180 130.588 180z" fill="#112F5B" data-color="1"></path>
  </g>
</svg>
);

// Badge Data (Using Icons Instead of Images)
const badges = [
  {
    icon: <img src={favicon1} alt="SSL Secured" />,
    alt: "SSL Secured",
    text: "Special Rate",
    para: "As an exclusive data recovery services partner for Seagate, we have negotiated special rates for Seagate customers!  When you submit your case via the online form, please make sure you enter the promo code the Seagate customer service agent provided you with for Seagate hard disk drives that are out of warranty."
  },
  {
    icon: <Icon2 />,
    alt: "Expertise You Can Trust",
    text: "Expertise You Can Trust",
    para: "Our team members were once part of the in-house data recovery services at Seagate.  We have years of close relationships working alongside Seagate's hard disk drive's design, research and development organizations so we understand every aspect of a Seagate hard disk drive." 
  },
  {
    icon: <Icon3 />,
    alt: "Best Recovery Success Rate",
    text: "Best Recovery Success Rate",
     para: "Thanks to our long-standing, close relationship with Seagate, we have access to the latest and greatest firmware and tools to repair your Seagate hard disk drive so that we can successfully recover the data that is stored on it.  No one else in the industry has this access."
  },
  {
    icon: <Icon4 />,
    alt: "Money Back Guaranteed",
    text: "Money Back Guaranteed",
    para: "Besides providing you with upfront, flat-rate pricing, no matter how many terabytes you need recovered, we will give you a full refund should your data recovery service be unsuccessful.  That's extra peace of mind that we will do our best to recover your data."
  },
  {
    icon: <Icon5 />,
    alt: "We Make It Easy",
    text: "We Make It Easy",
     para: "We understand that losing your data is stressful enough so we make it easy for you to go through the process of recovering your data.  Take a vacation, we'll keep you posted via email throughout the whole process so you won't miss a beat no matter where you are in the world."
  },
  {
    icon: <Icon6 />,
    alt: "We Keep It Secure",
    text: "We Keep It Secure",
    para: "Your data privacy is most important to us.  We take every measure to keep your data safe from the time it enters our data recovery lab to the time we ship the recovered data back to you, safely encrypted."
  }
];

export default function ProductTrustBadges() {
  return (
    <div className="badges">
      <div className="badges-wrapper">
        {badges.map((badge, index) => (
          <div key={index} className="product-badge-wrapper">
            <div className="badge-icon">{badge.icon}</div>
            <span className="product-badge-text">{badge.text}</span>
            <p className="badge-para">{badge.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
}