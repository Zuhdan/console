$wnd.hal.runAsyncCallback57("function tLi(){sLi()}\nfunction wLi(){vLi()}\nfunction zLi(){yLi()}\nfunction TLi(){SLi()}\nfunction rLi(){rLi=mZc}\nfunction pKi(){pKi=mZc}\nfunction sKi(){sKi=mZc}\nfunction vKi(){vKi=mZc}\nfunction yKi(){yKi=mZc}\nfunction BKi(){BKi=mZc}\nfunction EKi(){EKi=mZc}\nfunction HKi(){HKi=mZc}\nfunction KKi(){KKi=mZc}\nfunction NKi(){NKi=mZc}\nfunction QKi(){QKi=mZc}\nfunction sLi(){sLi=mZc}\nfunction vLi(){vLi=mZc}\nfunction yLi(){yLi=mZc}\nfunction BLi(){BLi=mZc}\nfunction ELi(){ELi=mZc}\nfunction HLi(){HLi=mZc}\nfunction SLi(){SLi=mZc}\nfunction mLi(){mLi=mZc;TLe()}\nfunction bKi(){bKi=mZc;WJi()}\nfunction WJi(){WJi=mZc;iyf();Gzm()}\nfunction ZJi(a){WJi();a.ZW(false)}\nfunction wKi(a){vKi();this.a=a}\nfunction zKi(a){yKi();this.a=a}\nfunction CLi(a){BLi();this.a=a}\nfunction FLi(a){ELi();this.a=a}\nfunction ILi(a,b){HLi();this.a=a;this.b=b}\nfunction IKi(a,b,d){HKi();this.a=a;this.c=b;this.b=d}\nfunction qKi(a,b,d){pKi();this.a=a;this.c=b;this.b=d}\nfunction tKi(a,b,d){sKi();this.a=a;this.c=b;this.b=d}\nfunction CKi(a,b,d){BKi();this.a=a;this.c=b;this.b=d}\nfunction FKi(a,b,d){EKi();this.a=a;this.c=b;this.b=d}\nfunction LKi(a,b,d){KKi();this.a=a;this.c=b;this.b=d}\nfunction OKi(a,b,d){NKi();this.a=a;this.c=b;this.b=d}\nfunction RKi(a,b,d){QKi();this.a=a;this.c=b;this.b=d}\nfunction oLi(a,b){mLi();this.a=a;VLe.call(this,b);this.EZb()}\nfunction YJi(a){WJi();kyf.call(this,a);this.gZb()}\nfunction VJi(){VJi=mZc;UJi=lgn('/{selected.profile}/subsystem=transactions')}\nfunction UKi(){UKi=mZc;Wwf();TKi=lUe('Validation error, see error messages below.')}\nfunction WKi(a,b,d,e,g,h,i,j,k,l){UKi();Ywf.call(this,a,b,d,e);this.tZb();this.b=g;this.d=h;this.j=i;this.c=j;this.f=k;this.i=l}\nfunction bLi(a){UKi();var b,d,e;{e=(hUe(),gUe);d=a.RV('use-jdbc-store');b=a.RV('jdbc-store-datasource');if(A7(d)&&gxd(_6(d.fg()))){if(B7(b)||C7(b.fg(),null)||UCd(g7(b.fg()))){b.aX('Please provide datasource JNDI name if using jdbc store.');e=TKi}}return e}}\nfunction _Ki(a){UKi();var b,d,e,g,h;{d=a.RV('journal-store-enable-async-io');g=a.RV('use-journal-store');h=(hUe(),gUe);if(A7(d)){b=D7(d.fg(),null)&&gxd(_6(d.fg()));e=A7(g)&&D7(g.fg(),null)&&gxd(_6(g.fg()));if(b&&!e){g.aX('Journal store needs to be enabled before enabling asynchronous IO.');h=TKi}}return h}}\nfunction aLi(a){UKi();var b,d,e,g,h,i,j;{j=(hUe(),gUe);i=a.RV('process-id-uuid');d=a.RV('process-id-socket-binding');g=a.RV('process-id-socket-max-ports');if(A7(i)&&A7(d)){h=D7(i.fg(),null)&&gxd(_6(i.fg()));b=Jj(g7(d.fg()));if(h&&D7(b,null)||!h&&C7(b,null)){d.aX('Please set either UUID or socket binding');j=lUe('Validation error, see error messages below.')}}if(A7(d)&&A7(g)){b=Jj(g7(d.fg()));e=Y6(g.fg(),97);if(C7(b,null)&&D7(e,null)&&g.EW()){g.aX(\"Can't be set if socket binding is not set\");j=TKi}}return j}}\nfunction dKi(a){bKi();var b,d,e,g,h,i,j,k,l,m,n,o,p;YJi.call(this,a);this.iZb();j=lgn('/{selected.profile}/subsystem=transactions');this.b=a.eUc().W6c(j);this.a=new ATd;this.c=(new lnm('tx-attributes-form',this.b)).TVc('default-timeout',x5(j5(Fjb,1),{3:1,1:1,4:1,5:1},2,6,['enable-tsm-status','journal-store-enable-async-io','jts','node-identifier','statistics-enabled','use-journal-store'])).unsorted().WVc(new qKi(this,j,a)).YVc(new tKi(this,j,a)).build();this.g=(new lnm('tx-process-form',this.b)).TVc('process-id-uuid',x5(j5(Fjb,1),{3:1,1:1,4:1,5:1},2,6,['process-id-socket-binding','process-id-socket-max-ports'])).unsorted().WVc(new wKi(this)).YVc(new zKi(this)).build();this.g.RV('process-id-socket-binding').QW(new Wve(a.dUc(),a.Qxc(),lgn('/socket-binding-group=*/socket-binding=*')));this.i=(new lnm('tx-recovery-form',this.b)).TVc('socket-binding',x5(j5(Fjb,1),{3:1,1:1,4:1,5:1},2,6,['status-socket-binding','recovery-listener'])).unsorted().WVc(new CKi(this,j,a)).YVc(new FKi(this,j,a)).build();this.i.RV('socket-binding').QW(new Wve(a.dUc(),a.Qxc(),lgn('/socket-binding-group=*/socket-binding=*')));this.i.RV('status-socket-binding').QW(new Wve(a.dUc(),a.Qxc(),lgn('/socket-binding-group=*/socket-binding=*')));this.f=(new lnm('tx-path-form',this.b)).TVc('object-store-path',x5(j5(Fjb,1),{3:1,1:1,4:1,5:1},2,6,['object-store-relative-to'])).unsorted().WVc(new IKi(this,j,a)).YVc(new LKi(this,j,a)).build();this.f.RV('object-store-relative-to').QW(new HBf);this.d=(new lnm('tx-jdbc-form',this.b)).TVc('use-jdbc-store',x5(j5(Fjb,1),{3:1,1:1,4:1,5:1},2,6,['jdbc-action-store-drop-table','jdbc-action-store-table-prefix','jdbc-communication-store-drop-table','jdbc-communication-store-table-prefix','jdbc-state-store-drop-table','jdbc-state-store-table-prefix','jdbc-store-datasource'])).unsorted().WVc(new OKi(this,j,a)).YVc(new RKi(this,j,a)).build();i=eMd(x5(j5(zRc,1),{3:1,1:1,4:1},48,0,[lgn('/{selected.profile}/subsystem=datasources/data-source=*'),lgn('/{selected.profile}/subsystem=datasources/xa-data-source=*')]));this.d.RV('jdbc-store-datasource').QW(new Vve(a.dUc(),a.Qxc(),i));this.e=new tte;l=Y6(Y6(Pee().KP(b=Y6(cee().RP(x1c('<h1>Transaction Manager<\\/h1><p>${metadata113.getDescription().getDescription()}<\\/p>')),6).jP()),6).MP(this.c),6).jP();this.a.put('html328',b);this.e.fS('tx-attributes-config-item','Configuration','pficon pficon-settings',l);o=Y6(Y6(Pee().KP(d=Y6(cee().RP(x1c('<h1>Process ID<\\/h1><p>${metadata113.getDescription().getDescription()}<\\/p>')),6).jP()),6).MP(this.g),6).jP();this.a.put('html330',d);this.e.fS('tx-process-item','Process','pficon pficon-service',o);p=Y6(Y6(Pee().KP(e=Y6(cee().RP(x1c('<h1>Recovery<\\/h1><p>${metadata113.getDescription().getDescription()}<\\/p>')),6).jP()),6).MP(this.i),6).jP();this.a.put('html332',e);this.e.fS('tx-recovery-config-item','Recovery','fa fa-repeat',p);n=Y6(Y6(Pee().KP(g=Y6(cee().RP(x1c('<h1>Path<\\/h1><p>${metadata113.getDescription().getDescription()}<\\/p>')),6).jP()),6).MP(this.f),6).jP();this.a.put('html334',g);this.e.fS('tx-path-config-item','Path','fa fa-folder-open',n);m=Y6(Y6(Pee().KP(h=Y6(cee().RP(x1c('<h1>JDBC<\\/h1><p>${metadata113.getDescription().getDescription()}<\\/p>')),6).jP()),6).MP(this.d),6).jP();this.a.put('html336',h);this.e.fS('tx-jdbc-config-item','JDBC','fa fa-database',m);k=Y6(moe().MP(Y6(joe().OP(this.e.sS()),7)),6).jP();this.VU(this.e,x5(j5(Zob,1),{3:1,1:1,4:1},9,0,[]));this.VU(this.c,x5(j5(Zob,1),{3:1,1:1,4:1},9,0,[]));this.VU(this.g,x5(j5(Zob,1),{3:1,1:1,4:1},9,0,[]));this.VU(this.i,x5(j5(Zob,1),{3:1,1:1,4:1},9,0,[]));this.VU(this.f,x5(j5(Zob,1),{3:1,1:1,4:1},9,0,[]));this.VU(this.d,x5(j5(Zob,1),{3:1,1:1,4:1},9,0,[]));this.Q1(k)}\nkZc(1783,1,{1:1});_.iD=function gid(a,b){a.xz(b)};var UJi;var $4b=Cyd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionPresenter/MyView');kZc(3585,117,{1:1,26:1,7:1,1092:1,41:1});_.gZb=function XJi(){};_.acb=function _Ji(a){this.hZb(Y6(a,505))};_.hZb=function $Ji(a){nZc(117).acb.call(this,a);this.g.PV().vd(new TLi);this.c.JV(a.uZb());this.g.JV(a.wZb());this.d.JV(a.vZb())};_.Qfb=function aKi(a){this.c.view(a);this.g.view(a);this.i.view(a);this.f.view(a);this.d.view(a)};var i5b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionView',3585,FHc);kZc(3586,3585,{1:1,26:1,7:1,1092:1,41:1},dKi);_.iZb=function cKi(){};_.jZb=function fKi(a,b,d,e){bKi();this.$bb('Transaction Manager',a.resolve(b.Qxc()),e,this.b)};_.kZb=function gKi(a,b,d){bKi();this.Ybb('Transaction Manager',a.resolve(b.Qxc()),d,this.b)};_.lZb=function hKi(a,b){bKi();Y6(this.eb,505).BZb(a,b)};_.mZb=function iKi(a){bKi();Y6(this.eb,505).AZb(a)};_.nZb=function jKi(a,b,d,e){bKi();this.$bb('Recovery',a.resolve(b.Qxc()),e,this.b)};_.oZb=function kKi(a,b,d){bKi();this.Ybb('Recovery',a.resolve(b.Qxc()),d,this.b)};_.pZb=function lKi(a,b,d,e){bKi();this.$bb('Path',a.resolve(b.Qxc()),e,this.b)};_.qZb=function mKi(a,b,d){bKi();this.Ybb('Path',a.resolve(b.Qxc()),d,this.b)};_.rZb=function nKi(a,b,d,e){bKi();this.$bb('JDBC',a.resolve(b.Qxc()),e,this.b)};_.sZb=function oKi(a,b,d){bKi();this.Ybb('JDBC',a.resolve(b.Qxc()),d,this.b)};_.cQ=function eKi(){nZc(50).cQ.call(this);ile(f7(this.a.get('html328'),$wnd.HTMLElement),'${metadata113.getDescription().getDescription()}',ADd(this.b.description.description));ile(f7(this.a.get('html330'),$wnd.HTMLElement),'${metadata113.getDescription().getDescription()}',ADd(this.b.description.description));ile(f7(this.a.get('html332'),$wnd.HTMLElement),'${metadata113.getDescription().getDescription()}',ADd(this.b.description.description));ile(f7(this.a.get('html334'),$wnd.HTMLElement),'${metadata113.getDescription().getDescription()}',ADd(this.b.description.description));ile(f7(this.a.get('html336'),$wnd.HTMLElement),'${metadata113.getDescription().getDescription()}',ADd(this.b.description.description))};var X4b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView',3586,i5b);kZc(3587,1,{1:1},qKi);_.MY=function rKi(a,b){this.a.jZb(this.c,this.b,a,b)};var N4b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$0$Type',3587,xjb);kZc(3588,1,{1:1},tKi);_.LY=function uKi(a){this.a.kZb(this.c,this.b,a)};var O4b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$1$Type',3588,xjb);kZc(3589,1,{1:1},wKi);_.MY=function xKi(a,b){this.a.lZb(a,b)};var P4b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$2$Type',3589,xjb);kZc(3590,1,{1:1},zKi);_.LY=function AKi(a){this.a.mZb(a)};var Q4b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$3$Type',3590,xjb);kZc(3591,1,{1:1},CKi);_.MY=function DKi(a,b){this.a.nZb(this.c,this.b,a,b)};var R4b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$4$Type',3591,xjb);kZc(3592,1,{1:1},FKi);_.LY=function GKi(a){this.a.oZb(this.c,this.b,a)};var S4b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$5$Type',3592,xjb);kZc(3593,1,{1:1},IKi);_.MY=function JKi(a,b){this.a.pZb(this.c,this.b,a,b)};var T4b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$6$Type',3593,xjb);kZc(3594,1,{1:1},LKi);_.LY=function MKi(a){this.a.qZb(this.c,this.b,a)};var U4b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$7$Type',3594,xjb);kZc(3595,1,{1:1},OKi);_.MY=function PKi(a,b){this.a.rZb(this.c,this.b,a,b)};var V4b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$8$Type',3595,xjb);kZc(3596,1,{1:1},RKi);_.LY=function SKi(a){this.a.sZb(this.c,this.b,a)};var W4b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$9$Type',3596,xjb);kZc(505,70,{52:1,45:1,1:1,26:1,7:1,505:1,70:1,92:1,77:1},WKi);_.tZb=function VKi(){this.a=new tLi;this.g=new wLi;this.e=new zLi};_.xZb=function cLi(a){UKi();Y6(this.Sz(),1092).Qfb(a)};_.yZb=function dLi(a){UKi();{if(a.failure){W1n(this.Sx(),h1n(this.i.htd().tpd(),a.failureDescription))}else{W1n(this.Sx(),w1n(this.i.htd().vld('Process')));this.Y1()}}};_.zZb=function eLi(a,b){UKi();var d,e,g,h;{h=b.S2c(0);g=b.S2c(1);e=h.failure||g.failure;if(e){d=a.failure?a.failureDescription:g.failureDescription;W1n(this.Sx(),h1n(this.i.htd().tpd(),d))}else{W1n(this.Sx(),w1n(this.i.htd().vld('Process')));this.Y1()}}};_.X1=function XKi(){return this.d.FRc('transactions')};_.uZb=function YKi(){return this.a};_.vZb=function ZKi(){return this.e};_.wZb=function $Ki(){return this.g};_.yz=function fLi(){nZc(73).yz.call(this);Y6(this.Sz(),1092)._bb(this)};_.Y1=function gLi(){this.b.rLc((VJi(),UJi),1,oZc(CLi.prototype.Jbb,CLi,[this]))};_.AZb=function hLi(a){var b,d;d=this.f.W6c((VJi(),UJi));b=(VJi(),UJi).resolve(this.j);this.b.NLc('Process',b,a,d,new oLi(this,a))};_.Fbb=function iLi(){return (VJi(),UJi).resolve(this.j)};_.BZb=function jLi(a,b){var d,e,g,h;if(!b.isEmpty()){if(b.containsKey('process-id-uuid')){h=_6(_6(b.get('process-id-uuid')))}else{h=pxd(Y6(a.model,14).get('process-id-uuid').asBoolean())}if(b.containsKey('process-id-socket-binding')){e=g7(g7(b.get('process-id-socket-binding')))}else{e=Y6(a.model,14).get('process-id-socket-binding').defined?Y6(a.model,14).get('process-id-socket-binding').asString():null}if(b.containsKey('process-id-socket-max-ports')){d=Y6(Y6(b.get('process-id-socket-max-ports'),138),138)}else{d=Y6(a.model,14).get('process-id-socket-max-ports').defined?iAd(Y6(a.model,14).get('process-id-socket-max-ports').asInt()):null}g=C7(e,null)||aDd(vDd(e))==0;if(D7(h,null)&&g){this.DZb()}else if(!g&&(C7(h,null)||!gxd(h))){this.CZb(e,d)}else{W1n(this.Sx(),g1n(this.i.htd().spd()))}}};_.CZb=function kLi(a,b){var d,e,g,h,i;d=(VJi(),UJi).resolve(this.j);i=(new w2m(d,'write-attribute')).J3c('name','process-id-socket-binding').J3c('value',a).build();g=(new w2m(d,'undefine-attribute')).J3c('name','process-id-uuid').build();if(A7(b)){h=(new w2m(d,'write-attribute')).J3c('name','process-id-socket-max-ports').I3c('value',b.fH()).build();e=new BZm(g,x5(j5(vPc,1),{3:1,1:1,4:1,106:1,147:1},91,0,[i,h]))}else{e=new BZm(g,x5(j5(vPc,1),{3:1,1:1,4:1,106:1,147:1},91,0,[i]))}this.c.f4c(e,new ILi(this,i))};_.DZb=function lLi(){var a,b;a=(VJi(),UJi).resolve(this.j);b=(new w2m(a,'write-attribute')).J3c('name','process-id-uuid').L3c('value',true).build();this.c.j4c(b,new FLi(this))};var TKi;var g5b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionPresenter',505,zHc);kZc(2386,80,{1:1,12:1},oLi);_.EZb=function nLi(){};_.IY=function pLi(a){this.a.Y1()};var Y4b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionPresenter/1',2386,Urb);kZc(2383,1,{1:1,358:1},tLi);_.VY=function uLi(a){return _Ki(a)};var _4b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionPresenter/lambda$0$Type',2383,xjb);kZc(2384,1,{1:1,358:1},wLi);_.VY=function xLi(a){return aLi(a)};var a5b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionPresenter/lambda$1$Type',2384,xjb);kZc(2385,1,{1:1,358:1},zLi);_.VY=function ALi(a){return bLi(a)};var b5b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionPresenter/lambda$2$Type',2385,xjb);kZc(7406,$wnd.Function,{1:1},CLi);_.Jbb=function DLi(a){this.a.xZb(a)};kZc(2387,1,{1:1,11:1},FLi);_.cg=function GLi(a){this.a.yZb(a)};var c5b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionPresenter/lambda$4$Type',2387,xjb);kZc(2388,1,{1:1,11:1},ILi);_.cg=function JLi(a){this.a.zZb(this.b,a)};var d5b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionPresenter/lambda$5$Type',2388,xjb);kZc(3597,1,{1:1,11:1},TLi);_.cg=function ULi(a){ZJi(a)};var h5b=Ayd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionView/lambda$0$Type',3597,xjb);kZc(1928,1,{1:1});_.JZb=function ZLi(){var a;if(B7(this.b)){a=this.QZb(this.a.WB().MUc());this.NZb(a);this.b=a}return this.b};_.LZb=function _Li(){var a;a=this.JZb();return a};_.MZb=function aMi(){var a;if(B7(this.d)){a=this.RZb(this.a.FA().zx(),this.LZb(),this.KZb(),this.a.VB().yTc(),this.a.PB().ZMc(),this.a.VB().zTc(),this.a.gC().q7c(),this.a.dC().g5c(),this.a.gC().p7c(),this.a.mC().utd());this.PZb(a);this.d=a}return this.d};_.NZb=function cMi(a){};_.PZb=function eMi(a){this.a.IA().iD(a,this.a.IA().UD())};_.QZb=function fMi(a){return new dKi(a)};_.RZb=function gMi(a,b,d,e,g,h,i,j,k,l){return new WKi(a,b,d,e,g,h,i,j,k,l)};kZc(1930,1,{42:1,1:1});_.Hk=function pMi(){this.b.hk(this.a.a.MZb())};kZc(217,1,{1:1,231:1});_.spd=function CTn(){return (new $0c).Ru('Please set either Process Id Uuid or Process Id Socket Binding').Su()};_.tpd=function DTn(){return (new $0c).Ru('Unable to switch process id').Su()};Sro(KK)(57);\n//# sourceURL=hal-57.js\n")
