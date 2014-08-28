Ext.define('app.view.Viewport',{
	extend : 'Ext.Viewport',
	layout : {
		type : 'border',
		collapsible : true
	},
	requires : [ 'app.view.CenterTabPanel',
                                    'app.view.anaekran.AnaEkranView',
                                    'app.view.anaekran.MesajKutusu',
                                    'app.view.anaekran.MasaBilgisiView',
                                    'app.view.menu.AnaMenu'],
                                
	initComponent : function(){
                        Ext.apply(this,{
                            items : [{   
                                        xtype : 'panel',
                                        region : 'center',
                                        layout : 'auto',
                                        width : '75%',
                                        height : '70%',
                                        items : [{
                                                        xtype : 'anaMenu',
                                                    },{
                                                        xtype : 'centerTabPanel',
                                                        height : '100%'                                                        
                                                    }]
                                        
                                    },{
                                        xtype : 'masaBilgisiV',
                                        collapsible : true,
                                        region : 'west',
                                        width : '20%'
                                    },{
                                        xtype : 'mesajKutusu',
                                        region : 'south',
                                        height : '30%',
                                        collapsible : true
                                    }]		
                        });
                        this.callParent();
	}
});