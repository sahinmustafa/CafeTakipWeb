Ext.application({
	name : 'app',
	appFolder : 'script',
	controllers :['KisiCont', 
                                     'anaekran.AnaEkranCont',
                                     'menu.AnaMenuCont',
                                     'menu.BilgisayarMenuCont',
                                     'urun.UrunCont'],
	autoCreateViewport : true	
});