package com.crm.dao;

import java.util.List;

import com.crm.model.Kisi;

public interface KisiDao {

    public void addKisi(Kisi k);
    public List<Kisi> allKisiList();
    public boolean kisiSil(int id);
    public boolean kisiGuncelle(Kisi k);
    public Kisi getKisi(int id);
    public List<Kisi> kisiList(String hql);
}
