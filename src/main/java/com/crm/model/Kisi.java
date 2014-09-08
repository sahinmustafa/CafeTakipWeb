package com.crm.model;

public class Kisi extends CafeObject{

	private String ad;
	private String soyad;
	private String sehir;
	private int yas;
	
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
	public String getSehir() {
		return sehir;
	}
	public void setSehir(String sehir) {
		this.sehir = sehir;
	}
	public int getYas() {
		return yas;
	}
	public void setYas(int yas) {
		this.yas = yas;
	}

	@Override
	public String toString() {
		return "Kisi [ad=" + ad + ", soyad=" + soyad + ", sehir=" + sehir
				+ ", yas=" + yas + "]";
	}
	
	
	
	
}
