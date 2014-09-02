

package com.crm.model;


public class Calisan extends Kisi{
    
    private String adres;
    private int maas;
    
    public Calisan() {}
    
    public String getAdres(){
       return adres;
    }
    public void setAdres(String adres){
       this.adres=adres;
    }
    public int getMaas(){
       return maas;
    }
    public void setMaas(int maas){
        this.maas=maas;
    }
    @Override
	public String toString() {
		return "Kisi [adres=" + adres + ", maas=" + maas + "]";
	}
    
    
    
}
