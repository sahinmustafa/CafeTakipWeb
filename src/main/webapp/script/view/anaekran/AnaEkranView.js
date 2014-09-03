Ext.define('app.view.anaekran.AnaEkranView',{
    extend : 'Ext.form.Panel',
    alias : 'widget.anaEkranV',
    title : 'Bilgisayar',    
    autoScroll : true,
    layout : 'column',
    iconCls : 'pc_menu_icon',
    initComponent : function(){
        this.tbar =[{
                            tooltip : 'Masa Ac',
                            scale : 'medium',
                            iconCls : 'masa_ac_icon'
                            },{
                            tooltip : 'Masa Bekeleme',
                            scale : 'large',
                            iconCls : 'masa_bekleme_icon'
                            },{
                            tooltip : 'Masa Kapat',
                            scale : 'large',
                            iconCls : 'masa_kapat_icon'
                            },{
                            tooltip : 'Masa Aktar',
                            scale : 'large',
                            iconCls : 'masa_aktar_icon'
                            },{
                            tooltip : 'Sure Ekle',
                            scale : 'large',
                            iconCls : 'sure_ekle_icon'
                            }];
        
        this.callParent();
        
        
    },
    
    addPC : function(isim){
        var panel = Ext.create('Ext.form.Panel',{
            padding : 10,
            id : 'pnl' + isim,
            alias : 'widget.panell',
            layout : {
                type : 'auto',
                align : 'center'
            },
            width : 85,
            height : 120,
            items : [{
                            xtype : 'image',
                            src : 'css/images/kapali.png',
                            id : 'img' + isim
                        },{
                            xtype : 'label',
                            text : 'PC ' + isim,
                            padding : 15,
                            id : 'lbl' + isim
                        }]
        });
        this.add(panel);
    }
});