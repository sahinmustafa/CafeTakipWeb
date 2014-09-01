
package com.crm.model;


public class Urun {
    
    private int urunID;
    private int barkod;
    private String urunAdi;
    private float birimFiyati;
    private int stok;
    
    public Urun(){}

    public int getUrunID() {
        return urunID;
    }

    public void setUrunID(int urunID) {
        this.urunID = urunID;
    }

    public int getBarkodNo() {
        return barkod;
    }

    public void setBarkod(int barkod) {
        this.barkod = barkod;
    }

    public String getUrunAdi() {
        return urunAdi;
    }

    public void setUrunAdi(String urunAdi) {
        this.urunAdi = urunAdi;
    }

    public float getBirimFiyati() {
        return birimFiyati;
    }

    public void setBirimFiyati(float birimFiyati) {
        this.birimFiyati = birimFiyati;
    }

    public int getStok() {
        return stok;
    }

    public void setStok(int stok) {
        this.stok = stok;
    }

    @Override
    public String toString() {
        return "Urun{" + "urunID=" + urunID + ", barkod=" + barkod + 
                ", urunAdi=" + urunAdi + ", birimFiyati=" + birimFiyati + ", stok=" + stok + '}';
    }
    

    
    
}
