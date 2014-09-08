Ext.define('app.view.menu.BilgisayarMenu',{
    extend : 'Ext.toolbar.Toolbar',
    alias : 'widget.bilgisayarMenu',
    initComponent : function(){
        this.items = [{
                                tooltip : 'Masa Ac',
                                scale : 'medium',
                                iconCls : 'masa_ac_icon'
                            },{
                            tooltip : 'Masa Bekeleme',
                            scale : 'medium',
                            iconCls : 'masa_bekleme_icon'
                            },{
                            tooltip : 'Masa Kapat',
                            scale : 'medium',
                            iconCls : 'masa_kapat_icon'
                            },{
                            tooltip : 'Masa Aktar',
                            scale : 'medium',
                            iconCls : 'masa_aktar_icon'
                            },{
                                xtype : 'button',
                            tooltip : 'Sure Ekle',
                            scale : 'medium',
                            iconCls : 'sure_ekle_icon',
                            action : 'sureEkle'
                            }];
        
        this.callParent();
    }
    
   
});

