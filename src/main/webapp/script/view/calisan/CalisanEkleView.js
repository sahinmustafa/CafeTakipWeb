Ext.define('app.view.calisan.CalisanEkleView',{
    extend : 'Ext.form.Panel',
    alias : 'widget.calisanEkleV',
    title : 'Calisan Ekle',
    cid : 0,
    iconCls : 'kasiyer_ekle_icon',
    bodyPadding : '5px',
    autoScroll : true,
    layout : {
        type : 'table',
        columns : 1
    },
    initComponent : function(){
        this.items = [{
                                xtype : 'fieldset',
                                title : 'Hesap Bilgileri',
                                collapsible : true,
                                flex : 1,
                                layout : {
                                    type  : 'table',
                                    columns : 2
                                },
                                items : [{
                                                xtype : 'textfield',
                                                fieldLabel : 'ID',
                                                id : 'id',
                                                disabled : true,
                                                colspan : 2,
                                                padding : 5,
                                                value : this.cid
                                            },{
                                                xtype : 'textfield',
                                                fieldLabel : 'Kullanici Adi',
                                                id : 'kulAdi',
                                                flex : 1,
                                                padding : 5,
                                                allowBlank : false,
                                                blankText : 'Kullanici bos olamaz!',
                                                minLength : 4,
                                                maxLength : 12,
                                                invalidText : 'Kulanici adi 4-12 arasinda olmalidir'
                                            },{
                                                xtype : 'textfield',
                                                fieldLabel : 'E-Mail',
                                                id : 'email',
                                                regex: /^((([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z\s?]{2,5}){1,25})*(\s*?;\s*?)*)*$/,
                                                regexText : 'Gecerli bir mail giriniz!',
                                                flex : 1,
                                                colspan : 1,
                                                padding : 5
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
                                                xtype : 'panel',
                                                border : false,
                                                layout : 'hbox',
                                                colspan : 2,
                                                flex : 2,
                                                items : [{
                                                                xtype : 'radiofield',
                                                                id : 'admin',
                                                                fieldLabel : 'Yetki',
                                                                hideEmptyLabel: false,
                                                                boxLabel : 'Admin',
                                                                name : 'yetki'
                                                            },{
                                                                xtype : 'radiofield',
                                                                id : 'kasiyer',
                                                                fieldLabel : '',
                                                                hideEmptyLabel: false,
                                                                boxLabel : 'Kasiyer',
                                                                name : 'yetki'
                                                            }]
                                            }]
                            },{ xtype : 'fieldset',
                                            title : 'Kisi Bilgileri',
                                            collapsible : true,
                                            flex : 1,
                                            layout : {
                                                type  : 'table',
                                                columns : 2
                                            },
                                            items : [{
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
                                                            padding : 5,
                                                            minLength : 10,
                                                            maxLength : 10,
                                                            invalidText : 'Lutfen gecerli bir telefon giriniz!'
                                                        },{
                                                            xtype : 'numberfield',
                                                            fieldLabel : 'Maas',
                                                            id : 'maas',
                                                            flex : 1,
                                                            padding : 5,
                                                            value : 0,
                                                            minValue : 0
                                                        },{
                                                            xtype : 'container',
                                                            layout : 'fit',
                                                            padding : 5,
                                                            colspan : 2,
                                                            items : [{
                                                                    xtype : 'textareafield',
                                                                    fieldLabel : 'Adres'
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

