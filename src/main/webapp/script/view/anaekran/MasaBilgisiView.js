Ext.define('app.view.anaekran.MasaBilgisiView',{
    extend : 'Ext.form.Panel',
    title : 'Masa Bilgisi', 
    alias : 'widget.masaBilgisiV',
    layout : 'auto',
    bodyPadding : 5,
    fieldDefaults : {
        fieldStyle : 'text-align : right; color : gray'
    },
    initComponent : function(){       
        this.items = [{
                                xtype : 'textfield',
                                fieldLabel : 'Masa Adi',
                                readOnly : true,
                                width : '100%',
                                value : 'Masa -1'
                            },{
                                xtype : 'textfield',
                                fieldLabel : 'Kullanici Adi',
                                readOnly : true,
                                width : '100%',
                                value : 'Kayitli Degil'
                            },{
                                xtype : 'textfield',
                                fieldLabel : 'Kullanim Ucreti',
                                readOnly : true,
                                width : '100%'
                            },{
                                xtype : 'textfield',
                                fieldLabel : 'Adisyon Ucreti',
                                readOnly : true,
                                width : '100%'
                            },{
                                xtype : 'textfield',
                                fieldLabel : 'Toplam Ucret',
                                readOnly : true,
                                width : '100%'
                            },{
                                xtype : 'progressbar',
                                text : 'Gecen Sure',
                                iterval : 100,
                                duration : 6000,
                                increment : 10,
                                margin : '5,5,5,5'
                            },{
                                xtype : 'progressbar',
                                text : 'Kalan Sure',
                                iterval : 100,
                                duration : 6000,
                                increment : 10,
                                margin : '5,5,5,5'
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

