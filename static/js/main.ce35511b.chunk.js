(this["webpackJsonpnotification-form"]=this["webpackJsonpnotification-form"]||[]).push([[0],{63:function(e,a,t){"use strict";t.r(a);var n=t(1),s=t.n(n),r=t(30),c=t.n(r),i=t(8),o=t(9),l=t(10),b=t(12),m=t(11),u=t(15),d=t.n(u),j=t(0),h=function(e){Object(b.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark  bg-dark",children:Object(j.jsxs)("div",{className:"container-fluid text-center",children:[Object(j.jsx)(i.b,{to:"/",className:"navbar-brand",children:"LightFeather.io"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":" Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{to:"/",className:"nav-link active","aria-current":"page",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{to:"/users/add",className:"nav-link active",tabIndex:"-1","aria-disabled":"true",children:"Create Account"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{to:"/login",className:"nav-link active",tabIndex:"-1","aria-disabled":"true",children:"Login"})})]}),Object(j.jsxs)("form",{className:"d-flex",children:[Object(j.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(j.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})}}]),t}(n.Component),p=function(e){Object(b.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return Object(j.jsx)("footer",{className:"footer mt-auto py-3 bg-dark shadow-lg",children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark","aria-label":"Tenth navbar example",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarsExample08","aria-controls":"navbarsExample08","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse justify-content-md-center",id:"navbarsExample08",children:Object(j.jsxs)("ul",{className:"navbar-nav",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link active","aria-current":"page",href:"https://berkeley-gov.github.io/myportfolio.github.io/",children:"Juan's portfolio"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{to:"/",className:"nav-link",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(i.b,{to:"/login",className:"nav-link",href:"#",tabIndex:"-1","aria-disabled":"true",children:"Login"})})]})})]})})})}}]),t}(n.Component),v=t(2),g=t(13),f=t(33);function N(e){var a=Object(n.useState)([]),t=Object(f.a)(a,2),s=t[0],r=t[1];Object(n.useEffect)((function(){d.a.get("https://609aae2c0f5a13001721bb02.mockapi.io/lightfeather/managers").then((function(e){return r(e.data)})).then((function(e){return console.log(e)}))}),[]);var c=s.sort((function(e,a){return e.lastName.localeCompare(a.lastName)})).filter((function(e){return isNaN(e.jurisdiction)})).sort((function(e,a){return e.jurisdiction.localeCompare(a.jurisdiction)}));return Object(j.jsxs)("select",{className:"form-control col-sm-2",onClick:function(a){console.log(a.target.value);var t=a.target.value;e.handleSupervisor(t)},children:[Object(j.jsx)("option",{value:"0",children:"--Select a supervisor--"}),c.map((function(e){return Object(j.jsxs)("option",{value:JSON.stringify(e),children:["Jurisdiction: ",e.jurisdiction," -- ",e.lastName,", ",e.firstName]},e.id)}))]})}var O=function(e){Object(b.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).onChangeFirstName=function(e){n.setState({firstName:e.target.value})},n.onChangeLastName=function(e){n.setState({lastName:e.target.value})},n.onChangeEmail=function(e){n.setState({email:e.target.value})},n.onChangePhoneNumber=function(e){n.setState({phoneNumber:e.target.value})},n.handleSupervisor=function(e){n.setState({selectedSupervisor:JSON.parse(e)})},n.onSubmit=function(e){e.preventDefault(),console.log(n.state.selectedSupervisor);var a=n.state.selectedSupervisor,t={firstName:n.state.firstName,lastName:n.state.lastName,email:n.state.email,phoneNumber:n.state.phoneNumber,supervisor:{firstName:a.firstName,lastName:a.lastName}};console.log(t),d.a.post("http://localhost:8080/api/submit",t).then((function(e){return console.log(e)})).catch((function(e){return console.log("+ Failed to make the axios post request to add user to the database: "+e)}))},n.state={firstName:"",lastName:"",email:"",phoneNumber:"",selectedSupervisor:{}},n.onChangeFirstName=n.onChangeFirstName.bind(Object(g.a)(n)),n.onChangeLastName=n.onChangeLastName.bind(Object(g.a)(n)),n.onChangeEmail=n.onChangeEmail.bind(Object(g.a)(n)),n.onChangePhoneNumber=n.onChangePhoneNumber.bind(Object(g.a)(n)),n.handleSupervisor=n.handleSupervisor.bind(Object(g.a)(n)),n}return Object(l.a)(t,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"row-fluid bg-body",style:{margin:"200px auto"},children:Object(j.jsx)("div",{className:"col-sm-4 mx-auto",children:Object(j.jsxs)("form",{className:"card shadow-lg",onSubmit:this.onSubmit,style:{width:"100%"},children:[Object(j.jsx)("h2",{className:"card-header text-center bg-dark text-white",children:"Create Account"}),Object(j.jsxs)("div",{className:"form-group row p-4",children:[Object(j.jsxs)("div",{className:"form-group col-md-6",children:[Object(j.jsx)("label",{className:"fs-5 pb-2",children:"First Name "}),Object(j.jsx)("input",{type:"text",name:"first_name",id:"first_name",value:this.state.firstName,className:"form-control",onChange:this.onChangeFirstName,autoComplete:"on",required:!0})]}),Object(j.jsxs)("div",{className:"form-group col-md-6",children:[Object(j.jsx)("label",{className:"fs-5 pb-2",children:"Last Name: "}),Object(j.jsx)("input",{type:"text",name:"last_name",id:"last_name",className:"{styles.input} form-control",value:this.state.lastName,onChange:this.onChangeLastName,autoComplete:"on",required:!0})]})]}),Object(j.jsxs)("div",{className:"form-group row p-4",children:[Object(j.jsxs)("div",{className:"form-group col-md-6",children:[Object(j.jsx)("label",{className:"fs-5 pb-2",children:"Email: "}),Object(j.jsx)("input",{type:"email",name:"email",id:"email",className:"{styles.input} form-control",value:this.state.email,onChange:this.onChangeEmail,autoComplete:"on"})]}),Object(j.jsxs)("div",{className:"form-group col-md-6",children:[Object(j.jsx)("label",{className:"fs-5 pb-2",children:"Phone number: "}),Object(j.jsx)("input",{type:"tel",name:"phone",id:"phone",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",className:"{styles.input} form-control",value:this.state.phoneNumber,onChange:this.onChangePhoneNumber,autoComplete:"on"})]})]}),Object(j.jsx)("div",{className:"form-group col-md-5",style:{marginLeft:25,paddingTop:20},children:Object(j.jsx)(N,{handleSupervisor:this.handleSupervisor,selectedSupervisor:this.state.selectedSupervisor})}),Object(j.jsx)("div",{className:"form-group pt-4 pb-4",children:Object(j.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary",style:{marginLeft:"30px"}})})]})})})}}]),t}(n.Component),x=function(e){Object(b.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={listOfSupervisors:[]},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("https://609aae2c0f5a13001721bb02.mockapi.io/lightfeather/managers").then((function(a){e.setState({listOfSupervisors:a.data}),console.log(e.state.listOfSupervisors)})).catch((function(e){console.log("\n> Failed to retrieve the list of supervisors from the Mock API."),console.log(e)}))}},{key:"render",value:function(){return Object(j.jsxs)(i.a,{children:[Object(j.jsx)(h,{}),Object(j.jsx)(v.a,{path:"/",exact:!0,component:O}),Object(j.jsx)(p,{})]})}}]),t}(s.a.Component),C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,64)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(x,{})})}),document.getElementById("root")),C()}},[[63,1,2]]]);
//# sourceMappingURL=main.ce35511b.chunk.js.map