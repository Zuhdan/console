$wnd.hal.runAsyncCallback37("function LKh(){KKh()}\nfunction MMh(){LMh()}\nfunction PMh(){OMh()}\nfunction SMh(){RMh()}\nfunction LMh(){LMh=mZc}\nfunction OMh(){OMh=mZc}\nfunction RMh(){RMh=mZc}\nfunction KKh(){KKh=mZc}\nfunction ZKh(){ZKh=mZc}\nfunction aLh(){aLh=mZc}\nfunction dLh(){dLh=mZc}\nfunction gLh(){gLh=mZc}\nfunction jLh(){jLh=mZc}\nfunction mLh(){mLh=mZc}\nfunction pLh(){pLh=mZc}\nfunction AKh(){AKh=mZc;w7e()}\nfunction FMh(){FMh=mZc;O4e()}\nfunction OKh(){OKh=mZc;yb();mcm()}\nfunction hLh(a){gLh();this.a=a}\nfunction kLh(a){jLh();this.a=a}\nfunction $Kh(a,b){ZKh();this.b=a;this.a=b}\nfunction eLh(a,b,d){dLh();this.a=a;this.b=b;this.c=d}\nfunction qLh(a,b,d,e){pLh();this.b=a;this.d=b;this.c=d;this.a=e}\nfunction bLh(a,b,d,e,g){aLh();this.c=a;this.d=b;this.e=d;this.a=e;this.b=g}\nfunction nLh(a,b,d,e,g){mLh();this.e=a;this.b=b;this.c=d;this.d=e;this.a=g}\nfunction QKh(a,b,d,e){OKh();this.a=a;this.c=b;this.b=d;this.d=e;Fb.call(this);this.eJb()}\nfunction wKh(a){tKh();eqf.call(this,a);this.$Ib()}\nfunction GKh(a,b){AKh();return new HMh(b,a)}\nfunction JKh(a,b,d,e,g){AKh();{W1n(a,w1n(b.htd().kid('Mail Session',d)));e.b4(d)}}\nfunction JMh(a){FMh();return new wdm(tDd('imap')+' '+'Socket Binding',a._Ib('imap'))}\nfunction IMh(a){FMh();return new wdm(tDd('smtp')+' '+'Socket Binding',a._Ib('smtp'))}\nfunction KMh(a){FMh();return new wdm(tDd('pop3')+' '+'Socket Binding',a._Ib('pop3'))}\nfunction HKh(a,b){AKh();var d;{d=Y6(b.get('mail-session').E8().zd().qO(new LKh).jO(C6d()),21);a.hk(d)}}\nfunction DKh(a,b,d,e){AKh();var g,h;{g=(sKh(),oKh).resolve(a);h=(new w2m(g,'read-resource')).L3c('recursive',true).build();b.j4c(h,new kLh(e))}}\nfunction IKh(a,b,d,e,g,h,i){AKh();var j,k;{if(A7(i)){j=(sKh(),nKh).resolve(a,h);k=(new w2m(j,'add')).J3c('mail-session',h).payload(i).build();b.j4c(k,new qLh(d,e,h,g))}}}\nfunction EKh(a,b,d,e,g,h){AKh();var i,j;{j=a.W6c((sKh(),nKh));i=new ejm((OKn(),GGn),b.htd().lid('Mail Session'),j,eMd(x5(j5(Fjb,1),{3:1,1:1,4:1,5:1},2,6,['jndi-name','from','debug'])),new nLh(d,e,g,b,h));i.Lz()}}\nfunction HMh(a,b){FMh();var d;T4e.call(this,a.name,a.aJb().isEmpty()?b.ftd().sed():b.htd().Qid(fh(', ').md(a.aJb())).Ku());this.xJb();d=new Tcm(a);d.XSc('jndi-name');if(a.bJb('smtp')){d.ZSc(new MMh)}if(a.bJb('imap')){d.ZSc(new PMh)}if(a.bJb('pop3')){d.ZSc(new SMh)}this.N2().FP(d)}\nfunction CKh(a,b,d,e,g,h,i,j,k){AKh();y7e.call(this,(new g7l(a,'mail-session','Mail Session')).hRc().ZQc(k.htd().old()).gRc());this.cJb();this.n4(new $Kh(h,g));this.v3(b.SPc((OKn(),FGn),'Mail Session',(sKh(),nKh),new bLh(i,k,h,g,e)));this.v3(b.VPc((OKn(),JGn)));this.k4(new eLh(this,d,j));this.p4(new hLh(k))}\nkZc(1047,13,{1:1,14:1,13:1},wKh);_._Ib=function xKh(a){var b;b=Q0m(this,'server'+'/'+a+'/'+'outbound-socket-binding-ref');return b.defined?b.asString():'n/a'};_.aJb=function yKh(){var a;a=new xLd;if(this.bJb('smtp')){a.add(tDd('smtp'))}if(this.bJb('imap')){a.add(tDd('imap'))}if(this.bJb('pop3')){a.add(tDd('pop3'))}return a};_.bJb=function zKh(a){return this.hasDefined('server')&&this.get('server').hasDefined(a)};kZc(4736,32,{1:1,7:1,9:1,32:1},CKh);_.cJb=function BKh(){};_.dJb=function FKh(a,b,d){AKh();return new QKh(this,d,a,b)};var IWb=Ayd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn',4736,oGc);kZc(4737,1,{1:1},LKh);_.Ve=function MKh(a){return X2d(this,a)};_.gd=function NKh(a){return new wKh(Y6(a,44))};var zWb=Ayd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/0methodref$ctor$Type',4737,xjb);kZc(4743,1,{1:1,7:1},QKh);_.eJb=function PKh(){};_.I4=function UKh(){return qcm(this)};_.lm=function VKh(){return rcm(this)};_.J4=function XKh(){return scm(this)};_.N4=function YKh(){return tcm(this)};_.C$=function RKh(){var a;a=new xLd;a.add(this.b.OSc(this.d.jZc('mail-session').vG('name',this.c.name).sG()));a.add(this.b.KSc('Mail Session',this.c.name,(sKh(),nKh),this.a));return a};_.jP=function SKh(){if(!this.c.aJb().isEmpty()){return ucm(this.c.name,fh(', ').md(this.c.aJb()))}return null};_.H4=function TKh(){var a;a=new xLd;a.add(this.c.name);a.addAll(this.c.aJb());return VCd(' ',a)};_.mm=function WKh(){return this.c.name};var AWb=Ayd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/1',4743,xjb);kZc(4739,1,{1:1},$Kh);_.$4=function _Kh(a,b){DKh(this.b,this.a,a,b)};var BWb=Ayd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$0$Type',4739,xjb);kZc(4742,1,{1:1},bLh);_.a5=function cLh(a){EKh(this.c,this.d,this.e,this.a,this.b,a)};var CWb=Ayd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$1$Type',4742,xjb);kZc(4744,1,{1:1},eLh);_._4=function fLh(a){return this.a.dJb(this.b,this.c,a)};var DWb=Ayd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$2$Type',4744,xjb);kZc(4745,1,{1:1},hLh);_.Z4=function iLh(a){return GKh(this.a,a)};var EWb=Ayd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$3$Type',4745,xjb);kZc(4738,1,{1:1,11:1},kLh);_.cg=function lLh(a){HKh(this.a,a)};var FWb=Ayd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$4$Type',4738,xjb);kZc(4741,1,{1:1},nLh);_.h6=function oLh(a,b){IKh(this.e,this.b,this.c,this.d,this.a,a,b)};var GWb=Ayd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$5$Type',4741,xjb);kZc(4740,1,{1:1,11:1},qLh);_.cg=function rLh(a){JKh(this.b,this.d,this.c,this.a,a)};var HWb=Ayd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionColumn/lambda$6$Type',4740,xjb);kZc(5660,28,{1:1,9:1,28:1},HMh);_.xJb=function GMh(){};var _Wb=Ayd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview',5660,hHc);kZc(5661,1,{1:1,85:1},MMh);_.Qbb=function NMh(a){return IMh(a)};var YWb=Ayd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview/lambda$0$Type',5661,xjb);kZc(5662,1,{1:1,85:1},PMh);_.Qbb=function QMh(a){return JMh(a)};var ZWb=Ayd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview/lambda$1$Type',5662,xjb);kZc(5663,1,{1:1,85:1},SMh);_.Qbb=function TMh(a){return KMh(a)};var $Wb=Ayd('org.jboss.hal.client.configuration.subsystem.mail','MailSessionPreview/lambda$2$Type',5663,xjb);kZc(1879,1,{1:1});_.OJb=function cOh(){var a;a=this.XJb(this.a.VB().yTc(),this.a.VB().wTc(),this.a.VB().ATc(),this.a.FA().zx(),this.a.dC().g5c(),this.a.gC().q7c(),this.a.gC().p7c(),this.a.ZB().nZc(),this.a.mC().utd());this.TJb(a);return a};_.TJb=function iOh(a){};_.XJb=function mOh(a,b,d,e,g,h,i,j,k){return new CKh(a,b,d,e,g,h,i,j,k)};kZc(1883,1,{42:1,1:1});_.Hk=function GOh(){this.b.hk(this.a.a.OJb())};kZc(132,1,{1:1,142:1});_.sed=function Pwn(){return 'No configured mail servers found.'};kZc(217,1,{1:1,231:1});_.Qid=function YMn(a){return (new $0c).Ru('Configured mail servers: ').Qu(a).Su()};_.old=function xPn(){return 'Filter by: session name or session type'};Sro(KK)(37);\n//# sourceURL=hal-37.js\n")
