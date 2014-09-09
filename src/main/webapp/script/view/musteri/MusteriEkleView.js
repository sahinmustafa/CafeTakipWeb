Ext.define('app.view.musteri.MusteriEkleView', {
    extend : 'Ext.form.Panel',
    alias : 'widget.musteriEkleV',
    title : 'Musteri Ekle',
    iconCls : 'musteri_ekle_icon',
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
                                                            name : 'id',
                                                            disabled : true,
                                                            colspan : 3,
                                                            padding : 5,
                                                            value : this.cid
                                                        },{
                                                            xtype : 'textfield',
                                                            fieldLabel : 'Ad',
                                                            id : 'ad',
                                                            name : 'ad',
                                                            flex : 1,
                                                            padding : 5,
                                                            allowBlank : false,
                                                            blankText : 'Ad bos olamaz!'
                                                        },{
                                                            xtype : 'textfield',
                                                            fieldLabel : 'Soyad',
                                                            id : 'soyad',
                                                            name : 'soyad',
                                                            flex : 1,
                                                            padding : 5,
                                                            allowBlank : false,
                                                            blankText : 'Soyad bos olamaz!'
                                                        },{
                                                            xtype : 'textfield',
                                                            fieldLabel : 'Telefon',
                                                            id : 'telefon',
                                                            name : 'telefon',
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
                                                            name : 'kulAdi',
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
                                                            name : 'bitisTarihi',
                                                            flex : 1,
                                                            padding : 5,
                                                            colspan : 2
                                                        },{
                                                            xtype : 'textfield',
                                                            fieldLabel : 'Sifre',
                                                            id : 'sifre',
                                                            name : 'sifre',
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
                                                            name : 'sifre2',
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
                                                            name : 'kullanilanSure',
                                                            flex : 1,
                                                            padding : 5,
                                                            value : 0,
                                                            minValue : 0
                                                        },{
                                                            xtype : 'numberfield',
                                                            fieldLabel : 'Kalan Sure',
                                                            id : 'kalanSure',
                                                            name : 'kalanSure',
                                                            flex : 1,
                                                            padding : 5,
                                                            value : 0
                                                        },{
                                                            xtype : 'numberfield',
                                                            fieldLabel : 'Borc',
                                                            id : 'borc',
                                                            name : 'borc',
                                                            flex : 1,
                                                            padding : 5,
                                                            value : 0
                                                        },{
                                                            xtype : 'numberfield',
                                                            fieldLabel : 'Indirim(%)',
                                                            id : 'indirim',
                                                            name : 'indirim',
                                                            flex : 1,
                                                            padding : 5,
                                                            value : 0,
                                                            minValue : 0
                                                        },{
                                                            xtype : 'radiogroup',
                                                            fieldLabel : 'Ucret Secenegi',
                                                            columns : 1,
                                                            id : 'ucretSecenek',
                                                            padding : 5,
                                                            labelWidth : 1,
                                                            items : [{
                                                                            xtype : 'radiofield',
                                                                            id : 'standart',
                                                                            fieldLabel : '',
                                                                            hideEmptyLabel: false,
                                                                            boxLabel : 'Standart',
                                                                            name : 'ucret'
                                                                        },{
                                                                            xtype : 'radiofield',
                                                                            id : 'uyeUcreti',
                                                                            fieldLabel : '',
                                                                            hideEmptyLabel: false,
                                                                            boxLabel : 'Uye Ucreti',
                                                                            name : 'ucret'
                                                                        },{
                                                                            xtype : 'radiofield',
                                                                            id : 'ucretsiz',
                                                                            fieldLabel : '',
                                                                            hideEmptyLabel: false,
                                                                            boxLabel : 'Ucretsiz',
                                                                            name : 'ucret'
                                                                        }]
                                                        },{
                                                            xtype : 'radiogroup',
                                                            fieldLabel : 'Odeme Secenegi',
                                                            columns : 1,
                                                            id : 'odemeSecenek',
                                                            rowspan : 2,
                                                            padding : 5,
                                                            labelWidth : 1,
                                                            items : [{
                                                                            xtype : 'radiofield',
                                                                            id : 'onceden',
                                                                            fieldLabel : '',
                                                                            hideEmptyLabel: false,
                                                                            boxLabel : 'Onceden Odenmis',
                                                                            name : 'odeme'
                                                                        },{
                                                                            xtype : 'radiofield',
                                                                            id : 'sonradan',
                                                                            fieldLabel : '',
                                                                            hideEmptyLabel: false,
                                                                            boxLabel : 'Sonradan Odenmis',
                                                                            name : 'odeme'
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

