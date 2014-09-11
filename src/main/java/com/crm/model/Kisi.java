package com.crm.model;

import java.util.Date;

public class Kisi extends CafeObject{

                private String ad;
                private String soyad;
                private String telefon;
                private String kulAdi;
                private String sifre;
                private Date kayitTarihi;
                
	public Kisi(){}
	
	public String getAd() {
		return ad;
	}
	public void setAd(String ad) {
		this.ad = ad;
	}
	public String getSoyad() {
		return soyad;
	}
	public void setSoyad(String soyad) {
		this.soyad = soyad;
	}

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public String getKulAdi() {
        return kulAdi;
    }

    public void setKulAdi(String kulAdi) {
        this.kulAdi = kulAdi;
    }

    public String getSifre() {
        return sifre;
    }

    public void setSifre(String sifre) {
        this.sifre = sifre;
    }


    public Date getKayitTarihi() {
        return kayitTarihi;
    }

    public void setKayitTarihi(Date kayitTarihi) {
        this.kayitTarihi = kayitTarihi;
    }

    @Override
    public String toString() {
        return "Kisi{" + "ad=" + ad + ", soyad=" + soyad + ", telefon=" + telefon + 
                ", kulAdi=" + kulAdi + ", sifre=" + sifre + ", kayitTarihi=" + kayitTarihi + '}';
    }


	
	
	
	
}
