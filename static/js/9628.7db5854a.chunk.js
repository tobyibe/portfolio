"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[9628],{9628:(e,t,i)=>{i.d(t,{Repulser:()=>c});var s=i(4409),o=i(9066);const n="repulse";class c extends s.sJ{constructor(e,t){super(t),this._clickRepulse=()=>{var e;const t=this.container,i=t.actualOptions.interactivity.modes.repulse;if(!i)return;const o=null!==(e=t.repulse)&&void 0!==e?e:{particles:[]};if(o.finish||(o.count||(o.count=0),o.count++,o.count===t.particles.count&&(o.finish=!0)),o.clicking){const e=t.retina.repulseModeDistance;if(!e||e<0)return;const n=Math.pow(e/6,3),c=t.interactivity.mouse.clickPosition;if(void 0===c)return;const r=new s.jl(c.x,c.y,n),l=t.particles.quadTree.query(r,(e=>this.isEnabled(e)));for(const t of l){const{dx:e,dy:r,distance:l}=(0,s.vr)(c,t.position),a=l**2,u=-n*i.speed/a;if(a<=n){o.particles.push(t);const i=s.Mi.create(e,r);i.length=u,t.velocity.setTo(i)}}}else if(!1===o.clicking){for(const e of o.particles)e.velocity.setTo(e.initialVelocity);o.particles=[]}},this._hoverRepulse=()=>{const e=this.container,t=e.interactivity.mouse.position,i=e.retina.repulseModeDistance;!i||i<0||!t||this._processRepulse(t,i,new s.jl(t.x,t.y,i))},this._processRepulse=(e,t,i,o)=>{var n;const c=this.container,r=c.particles.quadTree.query(i,(e=>this.isEnabled(e))),l=c.actualOptions.interactivity.modes.repulse;if(!l)return;const{easing:a,speed:u,factor:p,maxSpeed:d}=l,f=(0,s.il)(a),h=(null!==(n=null===o||void 0===o?void 0:o.speed)&&void 0!==n?n:u)*p;for(const v of r){const{dx:i,dy:o,distance:n}=(0,s.vr)(v.position,e),c=(0,s.qE)(f(1-n/t)*h,0,d),r=s.Mi.create(n?i/n*c:h,n?o/n*c:h);v.position.addTo(r)}},this._singleSelectorRepulse=(e,t)=>{const i=this.container,o=i.actualOptions.interactivity.modes.repulse;if(!o)return;const n=document.querySelectorAll(e);n.length&&n.forEach((e=>{const n=e,c=i.retina.pixelRatio,r={x:(n.offsetLeft+.5*n.offsetWidth)*c,y:(n.offsetTop+.5*n.offsetHeight)*c},l=.5*n.offsetWidth*c,a="circle"===t.type?new s.jl(r.x,r.y,l):new s.M_(n.offsetLeft*c,n.offsetTop*c,n.offsetWidth*c,n.offsetHeight*c),u=o.divs,p=(0,s.NV)(u,n);this._processRepulse(r,l,a,p)}))},this._engine=e,t.repulse||(t.repulse={particles:[]}),this.handleClickMode=e=>{const i=this.container.actualOptions.interactivity.modes.repulse;if(!i||e!==n)return;t.repulse||(t.repulse={particles:[]});const o=t.repulse;o.clicking=!0,o.count=0;for(const s of t.repulse.particles)this.isEnabled(s)&&s.velocity.setTo(s.initialVelocity);o.particles=[],o.finish=!1,setTimeout((()=>{t.destroyed||(o.clicking=!1)}),i.duration*s.Xu)}}clear(){}init(){const e=this.container,t=e.actualOptions.interactivity.modes.repulse;t&&(e.retina.repulseModeDistance=t.distance*e.retina.pixelRatio)}interact(){const e=this.container,t=e.actualOptions,i=e.interactivity.status===s.Rb,o=t.interactivity.events,c=o.onHover,r=c.enable,l=c.mode,a=o.onClick,u=a.enable,p=a.mode,d=o.onDiv;i&&r&&(0,s.hn)(n,l)?this._hoverRepulse():u&&(0,s.hn)(n,p)?this._clickRepulse():(0,s.U6)(n,d,((e,t)=>this._singleSelectorRepulse(e,t)))}isEnabled(e){var t;const i=this.container,o=i.actualOptions,c=i.interactivity.mouse,r=(null!==(t=null===e||void 0===e?void 0:e.interactivity)&&void 0!==t?t:o.interactivity).events,l=r.onDiv,a=r.onHover,u=r.onClick,p=(0,s.iK)(n,l);if(!(p||a.enable&&c.position||u.enable&&c.clickPosition))return!1;const d=a.mode,f=u.mode;return(0,s.hn)(n,d)||(0,s.hn)(n,f)||p}loadModeOptions(e){e.repulse||(e.repulse=new o.Z);for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];for(const o of i)e.repulse.load(null===o||void 0===o?void 0:o.repulse)}reset(){}}}}]);
//# sourceMappingURL=9628.7db5854a.chunk.js.map