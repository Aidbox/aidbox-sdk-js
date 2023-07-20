import{_ as C,o as p,c as o,G as i,F as u,e as D,k as l,t as c,J as n,U as s}from"./chunks/framework.01065553.js";const A={props:{items:Array}},q={key:0,style:{height:"0px","margin-top":"12px","border-top":"1px solid rgba(82, 82, 89, 0.32)"}},b={style:{padding:"6px 6px 6px 0px"}},d={style:{color:"white","font-family":"Consolas, monospace"}},m={key:0,style:{padding:"2px 6px","margin-left":"6px",border:"1px solid orange","border-radius":"10px","font-size":"10px",color:"#ffb224","background-color":"#341c00"}},h={style:{"font-size":"14px",opacity:".7","line-height":"16px","font-family":"Consolas, monospace","margin-left":"6px"}},E=["innerHTML"],g=l("div",{style:{height:"0px","border-top":"1px solid rgba(82, 82, 89, 0.32)"}},null,-1);function f(F,y,t,O,N,U){return p(!0),o(u,null,i(t.items,(e,r)=>(p(),o("div",{key:r},[r===0?(p(),o("div",q)):D("",!0),l("div",b,[l("div",null,[l("span",d,c(e.name),1),e.required?(p(),o("span",m,"REQUIRED")):D("",!0),l("span",h,c(e.type),1)]),l("div",{innerHTML:e.description,style:{"font-size":"12px",opacity:".7"}},null,8,E)]),g]))),128)}const a=C(A,[["render",f]]),v=s("",8),B=s("",7),_=s("",7),T=s("",4),P=s("",4),x=s("",5),k=s("",4),R=s("",4),I=s("",4),w=s("",1),V=JSON.parse('{"title":"Fundamentals","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"api-examples.md","filePath":"api-examples.md"}'),S={name:"api-examples.md"},J=Object.assign(S,{setup(F){return(y,t)=>(p(),o("div",null,[v,n(a,{items:[{name:"aidboxURL",required:!0,type:"string",description:"URL of Aidbox instance, you can simply create one <a target='_blank' href='https://aidbox.app'>here</a>"},{name:"username and password",required:!0,type:"string",description:"Username and password from client that <a target='_blank' href='https://docs.aidbox.app/modules-1/security-and-access-control/auth/basic-auth#register-client'>you registred</a> in Aidbox"}]},null,8,["items"]),B,n(a,{items:[{name:"resourceType",required:!0,type:"string",description:"Unique identifier given to each specific type of <a target='_blank' href='https://hl7.org/fhir/R4/resourcelist.html'>resource</a> defined in the FHIR specification"},{name:"body",required:!0,type:"object",description:"Each FHIR resource type has its own set of attributes, which define the structure and content of <a target='_blank' href='https://hl7.org/fhir/R4/observation.html'>that resource</a>"}]},null,8,["items"]),_,n(a,{items:[{name:"resourceName",required:!0,type:"string",description:"Unique identifier given to each specific type of <a target='_blank' href='https://hl7.org/fhir/R4/resourcelist.html'>resource</a> defined in the FHIR specification"},{name:"id",required:!0,type:"object",description:"Unique identifier of the resource across all resources of the same type in a FHIR server"}]},null,8,["items"]),T,n(a,{items:[{name:"resourceName",required:!0,type:"string",description:"Unique identifier given to each specific type of <a target='_blank' href='https://hl7.org/fhir/R4/resourcelist.html'>resource</a> defined in the FHIR specification"},{name:"id",required:!0,type:"string",description:"Unique identifier of the resource across all resources of the same type in a FHIR server"},{name:"body",required:!0,type:"object",description:"Each FHIR resource type has its own set of attributes, which define the structure and content of <a target='_blank' href='https://hl7.org/fhir/R4/observation.html'>that resource</a>"}]},null,8,["items"]),P,n(a,{items:[{name:"resourceName",required:!0,type:"string",description:"Unique identifier given to each specific type of <a target='_blank' href='https://hl7.org/fhir/R4/resourcelist.html'>resource</a> defined in the FHIR specification"},{name:"id",required:!0,type:"string",description:"Unique identifier of the resource across all resources of the same type in a FHIR server"}]},null,8,["items"]),x,n(a,{items:[{name:"arg1",required:!0,type:"number",description:"How many resourses will return with single request. (By default, Aidbox return a maximum of 100 rows)"}]},null,8,["items"]),k,n(a,{items:[{name:"arg1",required:!0,type:"Array<string>",description:"Resourse's atttibutes that returns in response"}]}),R,n(a,{items:[{name:"arg1",required:!0,type:"number",description:"The page number (offset)"}]},null,8,["items"]),I,n(a,{items:[{name:"arg1",required:!0,type:"string",description:"The attribute name which list should be sorted by"},{name:"arg2",required:!1,type:"asc | desc",description:"The order in which data should be arranged"}]}),w]))}});export{V as __pageData,J as default};
