Ext.define('app.view.anaekran.AnaEkranView',{
    extend : 'Ext.form.Panel',
    alias : 'widget.anaEkranV',
    title : 'Bilgisayar',    
    autoScroll : true,
    layout : 'column',
    
    initComponent : function(){
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
                            src : 'images/kapali.png',
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