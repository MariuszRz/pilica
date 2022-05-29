import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body,* 
  {
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family:  'Roboto','Segoe UI', sans-serif;
    line-height:1.5 ;
    color: ${(props) => props.theme.color.text.normal};
    font-weight: 400;
  }

  body
  {
    font-size:1rem ;
  }

  html 
  {
    scroll-behavior: smooth;
  }

  ul , ol, li 
  {
    margin-left:20px;
  }

  a
  {
    text-decoration: none;
  }

  .container
  {
    max-width: 1024px;
    margin: 0 auto;;
  }

  .container
  {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    @media (min-width:576px) {
      max-width: 540px;   
    }
    @media (min-width:768px) {    
      max-width: 720px;
    }
    @media (min-width:992px) {
      max-width: 960px;
    }
    @media (min-width:1200px) {    
      max-width: 1140px;
    }
    @media (min-width:1400px) {
      max-width: 1320px;
    }
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6 
  {
    margin-top: 0;
    margin-bottom: .5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  h1 
  {
    font-size: calc(1.375rem + 1.5vw);
    @media (min-width:1200px) {
      font-size: 2.5rem;
    }
  }

  h2 
  {
    font-size: calc(1.325rem + .9vw);
    @media (min-width:1200px) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: calc(1.3rem + .6vw);
    @media (min-width:1200px) {
      font-size: 1.75rem;
    }
  }

  h4 {
    font-size: calc(1.275rem + .3vw);
    @media (min-width:1200px) {
      font-size: 1.5rem
    }
  }

  h5 {
    font-size: 1.25rem;
  }

  h6 {
    font-size: 1rem
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem
  }

  .hide
  {
    display:none;
  }
 .flex-wrap {
    flex-wrap: wrap !important
}

.flex-nowrap {
    flex-wrap: nowrap !important
}

.flex-wrap-reverse {
    flex-wrap: wrap-reverse !important
}

.justify-content-start {
    justify-content: flex-start !important
}

.justify-content-end {
    justify-content: flex-end !important
}

.justify-content-center {
    justify-content: center !important
}

.justify-content-between {
    justify-content: space-between !important
}

.justify-content-around {
    justify-content: space-around !important
}

.justify-content-evenly {
    justify-content: space-evenly !important
}

.align-items-start {
    align-items: flex-start !important
}

.align-items-end {
    align-items: flex-end !important
}

.align-items-center {
    align-items: center !important
}

.align-items-baseline {
    align-items: baseline !important
}

.align-items-stretch {
    align-items: stretch !important
}

.align-content-start {
    align-content: flex-start !important
}

.align-content-end {
    align-content: flex-end !important
}

.align-content-center {
    align-content: center !important
}

.align-content-between {
    align-content: space-between !important
}

.align-content-around {
    align-content: space-around !important
}

.align-content-stretch {
    align-content: stretch !important
}

.align-self-auto {
    align-self: auto !important
}

.align-self-start {
    align-self: flex-start !important
}

.align-self-end {
    align-self: flex-end !important
}

.align-self-center {
    align-self: center !important
}

.align-self-baseline {
    align-self: baseline !important
}

.align-self-stretch {
    align-self: stretch !important
}

.order-first {
    order: -1 !important
}

.order-0 {
    order: 0 !important
}

.order-1 {
    order: 1 !important
}

.order-2 {
    order: 2 !important
}

.order-3 {
    order: 3 !important
}

.order-4 {
    order: 4 !important
}

.order-5 {
    order: 5 !important
}

.order-last {
    order: 6 !important
}

.m-0 {
    margin: 0 !important
}

.m-1 {
    margin: .25rem !important
}

.m-2 {
    margin: .5rem !important
}

.m-3 {
    margin: 1rem !important
}

.m-4 {
    margin: 1.5rem !important
}

.m-5 {
    margin: 3rem !important
}

.m-auto {
    margin: auto !important
}

.mx-0 {
    margin-right: 0 !important;
    margin-left: 0 !important
}

.mx-1 {
    margin-right: .25rem !important;
    margin-left: .25rem !important
}

.mx-2 {
    margin-right: .5rem !important;
    margin-left: .5rem !important
}

.mx-3 {
    margin-right: 1rem !important;
    margin-left: 1rem !important
}

.mx-4 {
    margin-right: 1.5rem !important;
    margin-left: 1.5rem !important
}

.mx-5 {
    margin-right: 3rem !important;
    margin-left: 3rem !important
}

.mx-auto {
    margin-right: auto !important;
    margin-left: auto !important
}

.my-0 {
    margin-top: 0 !important;
    margin-bottom: 0 !important
}

.my-1 {
    margin-top: .25rem !important;
    margin-bottom: .25rem !important
}

.my-2 {
    margin-top: .5rem !important;
    margin-bottom: .5rem !important
}

.my-3 {
    margin-top: 1rem !important;
    margin-bottom: 1rem !important
}

.my-4 {
    margin-top: 1.5rem !important;
    margin-bottom: 1.5rem !important
}

.my-5 {
    margin-top: 3rem !important;
    margin-bottom: 3rem !important
}

.my-auto {
    margin-top: auto !important;
    margin-bottom: auto !important
}

.mt-0 {
    margin-top: 0 !important
}

.mt-1 {
    margin-top: .25rem !important
}

.mt-2 {
    margin-top: .5rem !important
}

.mt-3 {
    margin-top: 1rem !important
}

.mt-4 {
    margin-top: 1.5rem !important
}

.mt-5 {
    margin-top: 3rem !important
}

.mt-auto {
    margin-top: auto !important
}

.me-0 {
    margin-right: 0 !important
}

.me-1 {
    margin-right: .25rem !important
}

.me-2 {
    margin-right: .5rem !important
}

.me-3 {
    margin-right: 1rem !important
}

.me-4 {
    margin-right: 1.5rem !important
}

.me-5 {
    margin-right: 3rem !important
}

.me-auto {
    margin-right: auto !important
}

.mb-0 {
    margin-bottom: 0 !important
}

.mb-1 {
    margin-bottom: .25rem !important
}

.mb-2 {
    margin-bottom: .5rem !important
}

.mb-3 {
    margin-bottom: 1rem !important
}

.mb-4 {
    margin-bottom: 1.5rem !important
}

.mb-5 {
    margin-bottom: 3rem !important
}

.mb-auto {
    margin-bottom: auto !important
}

.ms-0 {
    margin-left: 0 !important
}

.ms-1 {
    margin-left: .25rem !important
}

.ms-2 {
    margin-left: .5rem !important
}

.ms-3 {
    margin-left: 1rem !important
}

.ms-4 {
    margin-left: 1.5rem !important
}

.ms-5 {
    margin-left: 3rem !important
}

.ms-auto {
    margin-left: auto !important
}

.p-0 {
    padding: 0 !important
}

.p-1 {
    padding: .25rem !important
}

.p-2 {
    padding: .5rem !important
}

.p-3 {
    padding: 1rem !important
}

.p-4 {
    padding: 1.5rem !important
}

.p-5 {
    padding: 3rem !important
}

.px-0 {
    padding-right: 0 !important;
    padding-left: 0 !important
}

.px-1 {
    padding-right: .25rem !important;
    padding-left: .25rem !important
}

.px-2 {
    padding-right: .5rem !important;
    padding-left: .5rem !important
}

.px-3 {
    padding-right: 1rem !important;
    padding-left: 1rem !important
}

.px-4 {
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important
}

.px-5 {
    padding-right: 3rem !important;
    padding-left: 3rem !important
}

.py-0 {
    padding-top: 0 !important;
    padding-bottom: 0 !important
}

.py-1 {
    padding-top: .25rem !important;
    padding-bottom: .25rem !important
}

.py-2 {
    padding-top: .5rem !important;
    padding-bottom: .5rem !important
}

.py-3 {
    padding-top: 1rem !important;
    padding-bottom: 1rem !important
}

.py-4 {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important
}

.py-5 {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important
}

.pt-0 {
    padding-top: 0 !important
}

.pt-1 {
    padding-top: .25rem !important
}

.pt-2 {
    padding-top: .5rem !important
}

.pt-3 {
    padding-top: 1rem !important
}

.pt-4 {
    padding-top: 1.5rem !important
}

.pt-5 {
    padding-top: 3rem !important
}

.pe-0 {
    padding-right: 0 !important
}

.pe-1 {
    padding-right: .25rem !important
}

.pe-2 {
    padding-right: .5rem !important
}

.pe-3 {
    padding-right: 1rem !important
}

.pe-4 {
    padding-right: 1.5rem !important
}

.pe-5 {
    padding-right: 3rem !important
}

.pb-0 {
    padding-bottom: 0 !important
}

.pb-1 {
    padding-bottom: .25rem !important
}

.pb-2 {
    padding-bottom: .5rem !important
}

.pb-3 {
    padding-bottom: 1rem !important
}

.pb-4 {
    padding-bottom: 1.5rem !important
}

.pb-5 {
    padding-bottom: 3rem !important
}

.ps-0 {
    padding-left: 0 !important
}

.ps-1 {
    padding-left: .25rem !important
}

.ps-2 {
    padding-left: .5rem !important
}

.ps-3 {
    padding-left: 1rem !important
}

.ps-4 {
    padding-left: 1.5rem !important
}

.ps-5 {
    padding-left: 3rem !important
}

`;
export default GlobalStyle;
