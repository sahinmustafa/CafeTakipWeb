Ext.define('app.view.musteri.MusteriEkleView', {
    extend : 'Ext.form.Panel',
    alias : 'widget.musteriEkleV',
    title : 'Musteri Ekle',
    bodyPadding : '5px',
    cid : 0,
    
    layout : {
        type : 'table',
        columns : 1
    },
    
    initComponent : function(){
        this.items = [{
                                            xtype : 'fieldset',
                                            title : 'Kisi Bilgileri',
                                            collasible : true,
                                            flex : 1,
                                            layout : {
                                                type  : 'table',
                                                columns : 3
                                            },
                                            items : [{
                                                            xtype : 'textfield',
                                                            fieldLabel : 'ID',
                                                            id : 'id',
                                                            disabled : true,
                                                            colspan : 3,
                                                            padding : 5,
                                                            value : this.cid
                                                        },{
                                                            xtype : 'textfield',
                                                            fieldLabel : 'Ad',
                                                            id : 'ad',
                                                            flex : 1,
                                                            padding : 5,
                                                            allowBlank : false,
                                                            blankText : 'Ad bos olamaz!'
                                                        },{
                                                            xtype : 'textfield',
                                                            fieldLabel : 'Soyad',
                                                            id : 'soyad',
                                                            flex : 1,
                                                            padding : 5,
                                                            allowBlank : false,
                                                            blankText : 'Soyad bos olamaz!'
                                                        },{
                                                            xtype : 'textfield',
                                                            fieldLabel : 'Telefon',
                                                            id : 'telefon',
                                                            minLength : 10,
                                                            maxLength : 10,
                                                            invalidText : 'Lutfen gecerli bir telefon giriniz!'
                                                        }]
                                        },{
                                            xtype : 'fieldset',
                                            title : 'Hesap Bilgileri',
                                            collasible : true,
                                            flex : 1,
                                            layout : {
                                                type  : 'table',
                                                columns : 3
                                            },
                                            items : [{
                                                            xtype : 'textfield',
                                                            fieldLabel : 'Kullanici Adi',
                                                            id : 'kulAdi',
                                                            flex : 1,
                                                            padding : 5,
                                                            allowBlank : false,
                                                            blankText : 'Kullanici adi bos olamaz!',
                                                            minLength : 4,
                                                            maxLength : 12,
                                                            invalidText : 'Kulanici adi 4-12 arasinda olmalidir'
                                                        },{
                                                            xtype : 'datefield',
                                                            fieldLabel : 'Bitis Tarihi',
                                                            id : 'bitisTarihi',
                                                            flex : 1,
                                                            padding : 5,
                                                            colspan : 2
                                                        },{
                                                            xtype : 'textfield',
                                                            fieldLabel : 'Sifre',
                                                            id : 'sifre',
                                                            flex : 1,
                                                            padding : 5,
                                                            inputType : 'password',
                                                            minLength : 4,
                                                            maxLength : 8,
                                                            invalidText : 'Sifre uzunlugu 4-12 arasinda olmalidir!',
                                                            allowBlank : false,
                                                            blankText : 'Sifre alani bos olamaz!'
                                                            
                                                        },{
                                                            xtype : 'textfield',
                                                            fieldLabel : 'Sifre Tekrar',
                                                            id : 'sifre2',
                                                            flex : 1,
                                                            padding : 5,
                                                            inputType : 'password',
                                                            minLength : 4,
                                                            maxLength : 8,
                                                            invalidText : 'Sifre uzunlugu 4-12 arasinda olmalidir!',
                                                            allowBlank : false,
                                                            blankText : 'Sifre alani bos olamaz!'
                                                        },{
                                                            xtype : 'numberfield',
                                                            fieldLabel : 'Kullanilan Sure',
                                                            id : 'kullanilanSure',
                                                            flex : 1,
                                                            padding : 5,
                                                            value : 0,
                                                            minValue : 0
                                                        },{
                                                            xtype : 'numberfield',
                                                            fieldLabel : 'Kalan Sure',
                                                            id : 'kalanSure',
                                                            flex : 1,
                                                            padding : 5,
                                                            value : 0
                                                        },{
                                                            xtype : 'numberfield',
                                                            fieldLabel : 'Borc',
                                                            id : 'borc',
                                                            flex : 1,
                                                            padding : 5,
                                                            value : 0
                                                        },{
                                                            xtype : 'numberfield',
                                                            fieldLabel : 'Indirim(%)',
                                                            id : 'indirim',
                                                            flex : 1,
                                                            padding : 5,
                                                            value : 0,
                                                            minValue : 0
                                                        },{
                                                            xtype : 'panel',
                                                            border : false,
                                                            layout : 'vbox',
                                                            rowspan : 3,
                                                            items : [{
                                                                            xtype : 'radiofield',
                                                                            id : 'standart',
                                                                            fieldLabel : 'Ucret Secenegi',
                                                                            boxLabel : 'Standart',
                                                                            name : 'ucretSecenek'
                                                                        },{
                                                                            xtype : 'radiofield',
                                                                            id : 'uyeUcreti',
                                                                            fieldLabel : '',
                                                                            hideEmptyLabel: false,
                                                                            boxLabel : 'Uye Ucreti',
                                                                            name : 'ucretSecenek'
                                                                        },{
                                                                            xtype : 'radiofield',
                                                                            id : 'ucretsiz',
                                                                            fieldLabel : '',
                                                                            hideEmptyLabel: false,
                                                                            boxLabel : 'Ucretsiz',
                                                                            name : 'ucretSecenek'
                                                                        }]
                                                        },{
                                                            xtype : 'panel',
                                                            border : false,
                                                            layout : 'vbox',
                                                            rowspan : 2,
                                                            items : [{
                                                                            xtype : 'radiofield',
                                                                            id : 'odemeSecenegi',
                                                                            fieldLabel : 'Odeme Secenegi',
                                                                            hideEmptyLabel: false,
                                                                            boxLabel : 'Onceden Odenmis',
                                                                            name : 'odemeSecenek'
                                                                        },{
                                                                            xtype : 'radiofield',
                                                                            id : 'sonradan',
                                                                            fieldLabel : '',
                                                                            hideEmptyLabel: false,
                                                                            boxLabel : 'Sonradan Odenmis',
                                                                            name : 'odemeSecenek'
                                                                        }]
                                                        }]
                                        },{
                                            xtype : 'panel',
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

