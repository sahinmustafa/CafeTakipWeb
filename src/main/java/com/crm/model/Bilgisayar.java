
package com.crm.model;

import java.util.Date;


public class Bilgisayar {
    
public static enum Durum {KAPALI, SINIRSIZ_ACIK, SURELI_ACIK, KILITLI, BEKLEMEDE, SURESI_BITMIS_BEKLEMEDE };
   
    private String masaAdi;
    private Date acilisSaati;
    private Musteri musteri;
    private int sureSiniri, gecenSure, beklemeSuresi;
    private Durum durum;
    
public Bilgisayar() {}

    public String getMasaAdi() {
        return masaAdi;
    }

    public void setMasaAdi(String masaAdi) {
        this.masaAdi = masaAdi;
    }

    public Date getAcilisSaati() {
        return acilisSaati;
    }

    public void setAcilisSaati(Date acilisSaati) {
        this.acilisSaati = acilisSaati;
    }

    public Musteri getMusteri() {
        return musteri;
    }

    public void setMusteri(Musteri musteri) {
        this.musteri = musteri;
    }

    public int getSureSiniri() {
        return sureSiniri;
    }

    public void setSureSiniri(int sureSiniri) {
        this.sureSiniri = sureSiniri;
    }

    public int getGecenSure() {
        return gecenSure;
    }

    public void setGecenSure(int gecenSure) {
        this.gecenSure = gecenSure;
    }

    public int getBeklemeSuresi() {
        return beklemeSuresi;
    }

    public void setBeklemeSuresi(int beklemeSuresi) {
        this.beklemeSuresi = beklemeSuresi;
    }

    public Durum getDurum() {
        return durum;
    }

    public void setDurum(Durum durum) {
        this.durum = durum;
    }

    @Override
    public String toString() {
        return "Bilgisayar{" + "masaAdi=" + masaAdi + ", acilisSaati=" + acilisSaati +
                ", musteri=" + musteri + ", sureSiniri=" + sureSiniri + 
                ", gecenSure=" + gecenSure + ", beklemeSuresi=" + beklemeSuresi + ", durum=" + durum + '}';
    }



}
