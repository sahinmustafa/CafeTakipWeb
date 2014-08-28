Ext.define('app.view.anaekran.MasaBilgisiView',{
    extend : 'Ext.form.Panel',
    title : 'Masa Bilgisi', 
    alias : 'widget.masaBilgisiV',
    layout : 'auto',
    bodyPadding : 5,
    initComponent : function(){
        this.items = [{
                                xtype : 'textfield',
                                fieldLabel : 'Masa Adi',
                                editable : false,
                                width : '100%'
                            },{
                                xtype : 'textfield',
                                fieldLabel : 'Gecen Sure',
                                editable : false,
                                width : '100%'
                            },{
                                xtype : 'textfield',
                                fieldLabel : 'Ucret',
                                editable : false,
                                width : '100%'
                            },{
                                xtype : 'button',
                                text : 'Masa Ac/Kapat',
                                action : 'masaAc',
                                width : '47%',
                                margin : '2 2 2 2'
                            },{
                                xtype : 'button',
                                text : 'Masa Dondur',
                                action : 'masaDondur',
                                width : '47%',
                                margin : '2 2 2 2'
                            },{
                                xtype : 'button',
                                text : 'Ping At',
                                action : 'ping',
                                width : '47%',
                                margin : '2 2 2 2'
                            },{
                                xtype : 'button',
                                text : 'Masa Sure Uzat',
                                action : 'masaSureUzat',
                                width : '47%',
                                margin : '2 2 2 2'
                            }];
        this.callParent();
    }
});

