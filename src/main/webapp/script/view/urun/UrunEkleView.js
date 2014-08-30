Ext.define('app.view.urun.UrunEkleView',{
    extend : 'Ext.form.Panel',
    alias : 'widget.urunEkleV',
    title :'Urun Ekle',
    bodyPadding : '5px',
    iconCls : 'kafe_menu_ekle_icon',
    layout : {
        type : 'table',
        columns : 2
    },
    cid : 0,
    
    initComponent: function(){
        this.items = [{
                                xtype : 'textfield',
                                fieldLabel : 'ID',
                                id : 'id',
                                disabled : true,
                                colspan : 2,
                                padding : 5,
                                value : this.cid
                            },{
                                xtype : 'textfield',
                                fieldLabel : 'Urun Adi',
                                id : 'urunAdi',
                                flex : 1,
                                padding : 5,
                                allowBlank : false,
                                blankText : 'Urun Adi bos olamaz!'
                            },{
                                xtype : 'textfield',
                                fieldLabel : 'Barkod',
                                id : 'barkod',
                                flex : 1,
                                padding : 5
                            },{
                                xtype : 'numberfield',
                                fieldLabel : 'Birim Fiyati',
                                id : 'birimFiyati',
                                flex : 1,
                                padding : 5,
                                value : 0,
                                minValue : 0,
                                maxValue : 10000,
                                invalidText : 'Lutfen gecerli bir miktar giriniz!'
                            },{
                                xtype : 'numberfield',
                                fieldLabel : 'Stok Miktari',
                                id : 'stokMiktari',
                                flex : 1,
                                padding : 5,
                                value : 0,
                                minValue : 0,
                                maxValue : 10000,
                                invalidText : 'Lutfen gecerli bir miktar giriniz!'
                            },{
                                xtype : 'panel',
                                colspan : 2,
                                border : false,
                                buttons : [{
                                                text : ' Kaydet',
                                                action :'kaydet',
                                                iconCls : 'kaydet_btn_icon'
                                            },{
                                                text : 'Temizle',
                                                action : 'temizle',
                                                iconCls : 'temizle_btn_icon'
                                            }]
                            }];

        this.callParent();
    }
});