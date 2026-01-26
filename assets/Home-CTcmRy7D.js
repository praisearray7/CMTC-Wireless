import{j as e,B as r,c as g,C as f,T as i,G as d,P as A,L as G,g as h,r as c,i as u,a as E,S as V,b as B}from"./index-DkZmkggB.js";import{C as U,F as $}from"./FAQ-CPtZ5Mp2.js";import{B as X,V as Y}from"./VerifiedUserOutlined-Cz0RRzDr.js";import{T as H}from"./ThumbUpOutlined-z4yPcEhb.js";import{G as L,P as Q,T as K}from"./Timer-DY6lvXQs.js";import{V as q}from"./VerifiedUser-BZ1QdAzu.js";import{C as _,G as J}from"./GoogleReviews-vcjatsEs.js";import{S as ee}from"./SEO-C9dJEqhf.js";import{C as F}from"./Card-DXvwQIJI.js";import{C as te}from"./CardContent-CM5VxEUm.js";import"./AccordionSummary-DfWV4c7h.js";import"./useControlled-hD59Ww9t.js";import"./Rating-DbnY3OZ1.js";const oe=[{title:"iPad Repair",image:"https://www.gophermods.com/wp-content/uploads/2020/04/iPad-Repair-by-Gophermods-200x200-1.jpg",link:"/ipad-repair"},{title:"MacBook Repair",image:"https://www.gophermods.com/wp-content/uploads/2018/03/MacBook-Repair.jpg",link:"/macbook-repair"},{title:"Laptop Repair",image:"https://www.gophermods.com/wp-content/uploads/2019/02/Chromebook-Repair.jpg",link:"/laptop-repair"},{title:"iPhone Repair",image:"https://www.gophermods.com/wp-content/uploads/2025/06/iPhone-16-Repairs-Minneapolis.jpg",link:"/iphone-repair"},{title:"Computer Repair",image:"https://www.gophermods.com/wp-content/uploads/2014/11/mac-200x200.jpg",link:"/computer-repair"},{title:"Cell Phone Repair",image:"https://www.gophermods.com/wp-content/uploads/2025/06/Google-Pixel-Repairs-Minneapolis.jpg",link:"/cell-phone-repair"},{title:"Samsung Repair",image:"https://www.gophermods.com/wp-content/uploads/2021/01/Galaxy-Note-20.jpg",link:"/contact-us",state:{deviceModel:"Samsung"}},{title:"Smart Watch Repair",image:"https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/watch-card-40-hermes-ultra-202509_GEO_US?wid=680&hei=528&fmt=jpeg&qlt=90&.v=Ly93VWF6a1dGOWJLL3RMM0s0eGZ6bGptdm4xZHhxZWZzUlhoOU9Da0hNNVU4aHdGN0xlWGtoZjR6dnFUWE9VVTV0VzZXemQ1ZkRzK0p5ZFBxZERkQ3o2K3c3eDN1QlVKV09nQzhyNmV5TTNjeFVjd0E0NEk3ZEplNUNxd0pRazY",link:"/contact-us",state:{deviceModel:"Smart Watch"}}],re=()=>e.jsxs(r,{sx:{mb:10},children:[e.jsxs(r,{sx:{bgcolor:g.primary,py:8,position:"relative",textAlign:"center",mb:8},children:[e.jsx(f,{maxWidth:"xl",children:e.jsx(i,{variant:"h4",sx:{color:"#fff",fontWeight:400,fontFamily:"serif",maxWidth:"md",mx:"auto"},children:"We are a depot repair and lifecycle partner for iPhone, iPad, Mac, Chromebooks, and Windows laptops."})}),e.jsx(r,{sx:{position:"absolute",bottom:-20,left:"50%",transform:"translateX(-50%)",width:0,height:0,borderLeft:"25px solid transparent",borderRight:"25px solid transparent",borderTop:`25px solid ${g.primary}`}})]}),e.jsx(f,{maxWidth:"xl",children:e.jsx(d,{container:!0,spacing:4,justifyContent:"center",children:oe.map(t=>e.jsx(d,{size:{xs:6,sm:4,md:3},children:e.jsxs(A,{elevation:0,component:G,to:t.link,state:t.state,sx:{display:"flex",flexDirection:"column",alignItems:"center",textDecoration:"none",cursor:"pointer",bgcolor:"transparent",transition:"transform 0.3s ease","&:hover":{transform:"translateY(-5px)"}},children:[e.jsx(r,{component:"img",src:h(t.image),alt:t.title,sx:{width:"100%",maxWidth:180,height:"auto",aspectRatio:"1/1",objectFit:"contain",mb:2}}),e.jsx(i,{variant:"h6",sx:{color:"#000000",fontWeight:400,fontSize:"1rem",textAlign:"center"},children:t.title})]})},t.title))})})]});function ie({images:t,intervalMs:b=5e3,height:k=650,showBottomBar:o=!0}){const[s,D]=c.useState(0),[y,z]=c.useState(null),[j,W]=c.useState(!1),[C,R]=c.useState(!1),[p,P]=c.useState("pixel"),[w,v]=c.useState(6),[x,S]=c.useState(10),M=c.useRef(null),Z=c.useMemo(()=>Array.from({length:200},()=>Math.random()),[]);c.useEffect(()=>{if(t.length<=1||C||j)return;const n=setInterval(()=>{I((s+1)%t.length)},b);return()=>clearInterval(n)},[s,t.length,b,C,j]);const I=n=>{if(n===s||j)return;const a=["pixel","column","row","fade","twist","spin","blinds","zoomIn","zoomOut"],l=a[Math.floor(Math.random()*a.length)];P(l),l==="pixel"||l==="twist"||l==="spin"?(v(6),S(10)):l==="column"||l==="blinds"?(v(1),S(12)):l==="row"?(v(8),S(1)):(v(1),S(1)),z(n),W(!0),setTimeout(()=>{D(n),z(null),W(!1)},1400)},N=n=>p==="pixel"||p==="twist"||p==="spin"?Z[n]*.6:p==="column"||p==="blinds"?n*.05:p==="row"?n*.08:0;if(!t||t.length===0)return null;const O=w*x;return e.jsxs("div",{ref:M,onMouseEnter:()=>R(!0),onMouseLeave:()=>R(!1),style:m.sliderWrapper(k),children:[e.jsx("div",{style:m.slideStack,children:e.jsxs("figure",{className:"hero-slide active",children:[e.jsx("img",{src:t[s],alt:`Slide ${s+1}`,className:"hero-image ken-burns",draggable:!1}),e.jsx("div",{style:m.overlay})]})}),j&&y!==null&&e.jsx("div",{style:m.gridContainer,children:Array.from({length:O}).map((n,a)=>{const l=a%x,T=Math.floor(a/x);return e.jsx("div",{className:`pixel-cell ${p}`,style:{width:`${100/x}%`,height:`${100/w}%`,left:`${l*(100/x)}%`,top:`${T*(100/w)}%`,animationDelay:`${N(a)}s`},children:e.jsx("img",{src:t[y],alt:"",style:{position:"absolute",width:`${x*100}%`,height:`${w*100}%`,left:`-${l*100}%`,top:`-${T*100}%`,maxWidth:"none",objectFit:"cover"},draggable:!1})},a)})}),e.jsx("div",{style:m.dotsWrapper(o),children:t.map((n,a)=>e.jsx("button",{onClick:()=>I(a),"aria-label":`Go to slide ${a+1}`,className:`hero-dot ${a===(y!==null?y:s)?"active":""}`,style:{outline:"none"}},a))}),o&&e.jsx("div",{style:m.bottomBar,children:e.jsx("h2",{style:m.bottomText,children:"Get Your Repair Started"})}),e.jsx("style",{children:`
        /* Prevent horizontal scrollbar from 100vw width */
        body, html {
          overflow-x: hidden !important;
        }
        .hero-slide {
          position: absolute;
          inset: 0;
          overflow: hidden;
          margin: 0;
        }

        .hero-image.ken-burns {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          left: 0;
          top: 0;
          max-width: none;
          transform-origin: center center;
          animation: kenBurnsAuto 20s ease-out forwards;
        }

        @keyframes kenBurnsAuto {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }

        /* Transition Cells - Base */
        .pixel-cell {
          position: absolute;
          overflow: hidden;
          opacity: 0;
          box-shadow: 0 0 1px rgba(0,0,0,0.05); /* Slight anti-bleed */
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Default Pixel / Flip / Random Fade */
        .pixel-cell.pixel {
           transform: scale(0.95);
           animation: cellIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        /* Column / Row Slide */
        .pixel-cell.column, .pixel-cell.row {
           transform: scale(1);
           animation: slideIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        /* Twist (3D Flip) */
        .pixel-cell.twist {
          transform: rotateY(90deg) scale(0.5);
          animation: twistIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Spin */
        .pixel-cell.spin {
          transform: rotate(180deg) scale(0);
          animation: spinIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* Blinds (Vertical Flip) */
        .pixel-cell.blinds {
           transform: rotateX(90deg);
           transform-origin: top;
           animation: blindsIn 0.8s ease-out forwards;
        }

        /* Zoom In */
        .pixel-cell.zoomIn {
           transform: scale(0.5);
           opacity: 0;
           animation: zoomInKey 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        /* Zoom Out */
        .pixel-cell.zoomOut {
           transform: scale(1.5);
           opacity: 0;
           animation: zoomOutKey 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }


        @keyframes cellIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes slideIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes twistIn {
          0% { opacity: 0; transform: rotateY(90deg) scale(0.5); }
          100% { opacity: 1; transform: rotateY(0deg) scale(1); }
        }

        @keyframes spinIn {
          0% { opacity: 0; transform: rotate(180deg) scale(0); }
          100% { opacity: 1; transform: rotate(0deg) scale(1); }
        }

        @keyframes blindsIn {
          0% { opacity: 0; transform: rotateX(90deg); }
          100% { opacity: 1; transform: rotateX(0deg); }
        }

        @keyframes zoomInKey {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes zoomOutKey {
          0% { opacity: 0; transform: scale(1.5); }
          100% { opacity: 1; transform: scale(1); }
        }

        /* Dots Container */
        .dots-container {
             perspective: 600px;
        }

        /* 3D Cube Dot */
        .hero-dot {
          width: 16px;
          height: 16px;
          position: relative;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          transform-style: preserve-3d;
          transform-origin: center center -8px; /* Approx half size for pivot */
          transition: transform 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Faces */
        .hero-dot::before, .hero-dot::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-sizing: border-box;
            backface-visibility: hidden; /* Or visible for glass effect */
        }

        /* Front Face (Inactive/Outline) */
        .hero-dot::before {
            border: 1px solid rgba(255, 255, 255, 0.7);
            background: rgba(0, 0, 0, 0.1);
            transform: rotateX(0deg);
        }

        /* Top Face (Active/Filled) */
        .hero-dot::after {
            background: #7DBA2F;
            border: 1px solid #7DBA2F;
            transform: rotateX(90deg) translateZ(8px) translateY(-8px); 
            /* 
               Geometry trick: 
               By default ::after is at 0. 
               We want it to be the "Top" face.
               Rotate X 90 puts it flat.
               Translate Z and Y positions it relative to the cube center.
               Actually easier to just pivot the whole cube.
            */
            transform: rotateX(90deg) translateZ(8px); 
            /* Wait, standard cube mapping:
               Front: translateZ(8px)
               Top: rotateX(90deg) translateZ(8px)
               Origin: center center 0
            */
        }
        
        /* Correction for Cube Geometry assuming TransformOrigin is at center (0,0,0) - wait, css default is 50% 50% 0 */
        
        /* Let's try simpler: Cuboid Flip */
        .hero-dot::before {
             /* Front */
             transform: translateZ(8px);
        }
        .hero-dot::after {
             /* Top */
             transform: rotateX(90deg) translateZ(8px);
        }

        .hero-dot:hover {
             /* Slight tilt hint */
             transform: rotateX(15deg);
        }

        .hero-dot.active {
             /* Rotate to show Top */
             transform: rotateX(-90deg);
        }

        /* Add bottom shadow for realism */
        .hero-dot.active {
             box-shadow: 0 10px 10px rgba(0,0,0,0.2);
        }
      `})]})}const m={sliderWrapper:t=>({position:"relative",width:"100%",height:typeof t=="number"?`${t}px`:t,overflow:"hidden",left:0,transform:"none",maxWidth:"100%"}),slideStack:{position:"absolute",inset:0},gridContainer:{position:"absolute",inset:0,zIndex:10,overflow:"hidden"},overlay:{position:"absolute",inset:0,background:"linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.3) 100%)",pointerEvents:"none"},dotsWrapper:t=>({position:"absolute",bottom:t?"110px":"20px",left:"50%",transform:"translateX(-50%)",display:"flex",gap:"12px",zIndex:20}),bottomBar:{position:"absolute",bottom:0,left:0,width:"100%",backgroundColor:"#7DBA2F",height:"90px",display:"flex",alignItems:"center",justifyContent:"center",zIndex:30,boxShadow:"0 -4px 20px rgba(0,0,0,0.1)"},bottomText:{color:"#fff",fontSize:"clamp(24px, 5vw, 44px)",fontWeight:700,margin:0,textTransform:"capitalize",letterSpacing:"0.5px"}},be=()=>{const t=g.primary,b=g.primaryBlue,k=u.carousel.map(o=>h(o));return e.jsxs(e.Fragment,{children:[e.jsx(ee,{title:"Home",description:"Fast, reliable phone, laptop, and tablet repairs in Minneapolis & St. Paul. Certified technicians, same-day service, and quality parts guaranteed."}),e.jsx(r,{sx:{pt:{xs:7,md:5},pb:{xs:8,md:10}},children:e.jsx(f,{maxWidth:"xl",children:e.jsxs(d,{container:!0,spacing:8,alignItems:"center",children:[e.jsxs(d,{size:{xs:12,md:6},children:[e.jsxs(i,{variant:"h2",sx:{fontWeight:800,mb:3,fontSize:{xs:"2.5rem",md:"4rem"},color:"#000000",lineHeight:1.1},children:["Fast, Reliable ",e.jsx("br",{}),e.jsx("span",{style:{color:t},children:"Phone Repairs"}),e.jsx("br",{}),e.jsx("span",{style:{color:b},children:"Near You."})]}),e.jsx(i,{variant:"h6",sx:{color:"#000000",mb:3,fontWeight:400,lineHeight:1.6,maxWidth:600},children:"Get your phone fixed quickly and efficiently by our expert technicians. We offer same day repairs for most devices, ensuring you stay connected."}),e.jsxs(i,{variant:"h6",sx:{color:"#000000",mb:3,fontWeight:400,lineHeight:1.6,maxWidth:600},children:["📅 ",e.jsxs("a",{href:"https://calendly.com/martinakinseye/cmtcwireless",children:[" ",e.jsx("u",{style:{color:"blue"},children:"Get in touch"})]})," today to get exclusive ",e.jsx("b",{children:"discounts"})," and guaranteed ",e.jsx("b",{children:"priority service"}),"! 💬 Limited slots available — book now and save big before the offer ends!"]}),e.jsxs(r,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr",sm:"1fr 1fr 1fr"},gap:3,mb:6},children:[e.jsx(E,{fullWidth:!0,size:"large",sx:{py:1.5,fontSize:"1.5rem",whiteSpace:"nowrap"}}),e.jsx(V,{fullWidth:!0,size:"large",sx:{py:1.5,fontSize:"1.5rem",whiteSpace:"nowrap"}}),e.jsx(B,{variant:"outlined",color:"secondary",size:"large",fullWidth:!0,onClick:()=>window.scrollTo(0,870),sx:{py:2,fontSize:"1.5rem",borderWidth:2,"&:hover":{borderWidth:2},whiteSpace:"nowrap"},children:"View Services"})]}),e.jsx(r,{sx:{display:"grid",gridTemplateColumns:{xs:"1fr 1fr",sm:"1fr 1fr 1fr 1fr"},gap:2,alignItems:"stretch"},children:[{count:15,suffix:"+",label:"Years Experience",icon:e.jsx(L,{sx:{fontSize:40,color:t,mb:1}})},{count:50,suffix:"k+",label:"Devices Fixed",icon:e.jsx(Q,{sx:{fontSize:40,color:t,mb:1}})},{count:12,suffix:"k+",label:"Happy Customers",icon:e.jsx(q,{sx:{fontSize:40,color:t,mb:1}})},{count:45,suffix:"m",label:"Avg Repair Time",icon:e.jsx(K,{sx:{fontSize:40,color:t,mb:1}})}].map((o,s)=>e.jsxs(A,{elevation:3,sx:{p:2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",borderRadius:3,transition:"transform 0.3s","&:hover":{transform:"translateY(-5px)"}},children:[o.icon,e.jsx(i,{variant:"h4",sx:{fontWeight:800,color:"#000000",mb:.5},children:e.jsx(_,{target:o.count,suffix:o.suffix})}),e.jsx(i,{variant:"body2",color:"textSecondary",sx:{fontWeight:600,fontSize:"0.8rem",lineHeight:1.2},children:o.label.toUpperCase()})]},s))})]}),e.jsx(d,{size:{xs:12,md:6},sx:{padding:0},children:e.jsx(r,{sx:{position:"relative",width:"100%",aspectRatio:"1/1",borderRadius:4,overflow:"hidden",boxShadow:"0 20px 80px rgba(0,0,0,0.1)"},children:e.jsx(ie,{images:k,height:"100%",showBottomBar:!1,intervalMs:2500})})})]})})}),e.jsx(f,{id:"services-overview",maxWidth:"xl",sx:{py:8},children:e.jsx(d,{container:!0,spacing:2,justifyContent:"center",children:[{title:"Repair a Device",desc:"Broken phone? We fix screens, batteries, charging ports, and more — fast.",img:h(u.homeCardRepair),btnText:"Get a Free Quote",link:"/contact-us",state:{serviceNeeded:"Repair Service"}},{title:"Buy a Device",desc:"Certified pre-owned phones at unbeatable prices, fully tested and ready to go.",img:h(u.homeCardBuy),btnText:"Shop Now",link:"/buy-device"},{title:"Unlock Any Device",desc:"Unlock your device today — no hassle, no waiting.",btnText:"Get a Free Quote",img:h(u.homeCardUnlock),link:"/unlock-device"}].map((o,s)=>e.jsx(d,{size:{xs:12,md:4},sx:{display:"flex"},children:e.jsxs(F,{elevation:0,sx:{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:6,overflow:"hidden",textAlign:"center",p:4,transition:"transform 0.3s","&:hover":{transform:"translateY(-8px)"}},children:[e.jsxs(r,{sx:{display:"flex",flexDirection:"column",alignItems:"center",flexGrow:1},children:[e.jsx(r,{component:"img",src:o.img,alt:o.title,sx:{width:"180px",height:"auto",mb:3,mixBlendMode:"multiply",filter:"drop-shadow(0 10px 15px rgba(0,0,0,0.1))"}}),e.jsx(i,{variant:"h4",sx:{fontWeight:600,mb:2,color:"#000000"},children:o.title}),e.jsx(i,{variant:"body1",sx:{mb:4,color:"#000000",lineHeight:1.5},children:o.desc})]}),e.jsx(r,{children:e.jsx(B,{component:G,to:o.link,state:o.state,variant:"contained",sx:{bgcolor:g.primary,color:"#fff",fontWeight:700,fontSize:"1.1rem",px:4,py:1,borderRadius:2,boxShadow:"none","&:hover":{bgcolor:"#66C22E",boxShadow:"0 4px 12px rgba(22, 101, 52, 0.4)"}},children:o.btnText})})]})},s))})}),e.jsx(re,{}),e.jsxs(f,{maxWidth:"xl",sx:{py:10},children:[e.jsx(i,{variant:"h3",sx:{textAlign:"center",mb:6,fontWeight:800,color:"#000000"},children:"Why Choose Us"}),e.jsx(d,{container:!0,spacing:4,children:[{icon:e.jsx(X,{sx:{fontSize:40,color:t}}),title:"Same-Day Repairs",desc:"Most repairs completed within hours."},{icon:e.jsx(H,{sx:{fontSize:40,color:t}}),title:"Certified Technicians",desc:"Our team is highly trained and certified."},{icon:e.jsx(Y,{sx:{fontSize:40,color:t}}),title:"Customer Satisfaction",desc:"We prioritize your satisfaction."},{icon:e.jsx(U,{sx:{fontSize:40,color:t}}),title:"Quality Parts",desc:"We use only high-quality replacement parts."}].map((o,s)=>e.jsx(d,{size:{xs:12,sm:6,md:3},children:e.jsx(F,{elevation:0,sx:{height:"100%",bgcolor:"#F9FAFB",borderRadius:4,transition:"0.3s","&:hover":{transform:"translateY(-5px)"}},children:e.jsxs(te,{sx:{p:4},children:[e.jsx(r,{sx:{mb:2},children:o.icon}),e.jsx(i,{variant:"h6",sx:{fontWeight:700,mb:1,color:"#000000"},children:o.title}),e.jsx(i,{variant:"body2",color:"textSecondary",sx:{lineHeight:1.6},children:o.desc})]})})},s))})]}),e.jsx(r,{sx:{py:8},children:e.jsxs(f,{maxWidth:"xl",sx:{textAlign:"center"},children:[e.jsx(i,{variant:"h4",sx:{fontWeight:800,mb:4,color:"#000000"},children:"BBB Accreditation"}),e.jsx(r,{component:"img",src:h(u.bbbAccreditation),alt:"BBB Accredited Business",sx:{maxWidth:"100%",height:"auto",maxHeight:150}})]})}),e.jsx(J,{}),e.jsx($,{})]})};export{be as default};
