Ext.define('app.controller.anaekran.AnaEkranCont',{
    extend : 'Ext.app.Controller',
    views : ['anaekran.AnaEkranView', 'anaekran.MesajKutusu'],
    models : ['BilgisayarModel'],
    stores : ['BilgisayarStore'],
    
    refs : [{
                selector : 'anaEkranV',
                ref : 'anaEkranV'
            }],
    
    init : function(){
        this.control({
            'anaEkranV' : {
                beforerender : this.bilgisayarListesi
                
            },
            'anaEkranV image' :{
                render : function(comp){
                    comp.el.on('click', function(e, pnl){
                        alert('ID : ' + pnl.id);
                    });
                }
            }
        });
        
    },
    
    bilgisayarListesi : function(){
        var count = 30;
        
        for(var i = 1 ; i < count; i ++){
            this.getAnaEkranV().addPC(i);
        }
    }
});