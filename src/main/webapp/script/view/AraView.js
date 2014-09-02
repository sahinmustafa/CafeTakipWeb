Ext.define('app.view.AraView',{
    extend : 'Ext.form.Panel',
    title : 'Kisi Ara',
    alias : 'widget.araV',
    items :[{
                        xtype : 'textfield',
                        fieldLabel : 'ID',
                        name : 'id',
                        padding : 5
                },{
                        xtype: 'textfield',
                        fieldLabel : 'Isim',
                        name : 'ad',
                        padding : 5
                },{
                        xtype : 'button',
                        text : 'Ara',
                        action : 'ara',
                        width : '100%',
                        margin : 5
                },{
                        xtype : 'button',
                        text : 'Temizle',
                        action : 'temizle',
                        width : '100%',
                        margin : 5
                }]
});