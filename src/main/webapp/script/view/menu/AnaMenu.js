Ext.define('app.view.menu.AnaMenu',{
    extend : 'Ext.toolbar.Toolbar',
    alias : 'widget.anaMenu',
    initComponent : function(){
        this.items = [{
                        text : 'Bilgisayar',
                        menu : {
                            xtype : 'menu',
                            plain : false,
                            items : [{
                                text : 'MasaAc'
                            },{
                                text : 'Masa Ekle'
                            }]
                        }
                    },{
                        text : 'Kafeterya'
                    },{
                        text : 'Kasiyer'
                    },{
                        text : 'Adisyon'
                    }];
        
        this.callParent();
    }
    
   
});

