Ext.define('app.view.KisiView',{
    extend : 'Ext.form.Panel',
    alias : 'widget.kisiV',
    title : 'Kisi Bilgileri',
    autoShow : true,
    bodyPadding : '10px',
    style : 'margin : 0 auto;',
    cid : null,
    layout : {
        type : 'table',
        columns : 2
    },
    initComponent : function(){
                    this.items =
                            [{
                                    xtype : 'textfield',
                                    fieldLabel : 'ID',
                                    name : 'id',
                                    id : 'id',
                                    disabled : true,
                                    colspan : 2,
                                    value : this.cid
                                },{
                                    xtype : 'textfield',
                                    fieldLabel : 'Ad',
                                    name : 'ad',
                                    id : 'ad'
                            },{
                                    xtype : 'textfield',
                                    fieldLabel : 'Soyad',
                                    name : 'soyad',
                                    id : 'soyad'
                            },{
                                    xtype : 'textfield',
                                    fieldLabel : 'Yas',
                                    allowBlank : false,
                                    blankText : 'Yas alani bos birakilamaz',
                                    maxLength: 2,
                                    minLength : 1,
                                    invalidText : 'Lutfen gecerli bir yas giriniz!',
                                    name : 'yas',
                                    id : 'yas'
                            },{
                                    xtype : 'textfield',
                                    fieldLabel : 'Sehir',
                                    name : 'sehir',
                                    id : 'sehir'
                            },{
                                    xtype : 'button',
                                    text : 'Kaydet',
                                    action : 'kaydet',
                                    margin : 'center'
                                    
                            },{
                                    xtype : 'button',
                                    text : 'Vazgec',
                                    action : 'vazgec'
                            }];
                    this.callParent();
    }
});